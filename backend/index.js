const express = require("express");
const multer = require("multer");
const { transporter, mailOption } = require("./mail");
require("dotenv").config();

const PORT = 8080;
const app = express();
const upload = multer();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload.array());

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
        res.send("sent Successfully").status(200);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server successfully started on port ${PORT}`);
});
