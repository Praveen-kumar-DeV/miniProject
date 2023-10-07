const express = require("express");
const multer = require("multer");
const path = require("path");
const { transporter, mailOption } = require("./mail");
require("dotenv").config();

const PORT = 8080;
const app = express();
const upload = multer();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload.array());
app.use(express.static(path.join(__dirname, "public")));
//-------------end point for form body
app.post("/sendmail", async (req, res) => {
  console.log(req.body);
  let { fname, email, subject, message } = req.body;

  transporter.sendMail(
    mailOption(fname, email, subject, message),
    function (err, data) {
      if (err) {
        console.log("Error defined here : " + err);
        res.send(err).status(400);
      } else {
        console.log("Email sent successfully");
        res
          .sendFile(path.join(__dirname, "public", "success.html"))
          .status(200);
      }
    }
  );
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server successfully started on port ${PORT}`);
});
