const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  //host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: process.env.GMAIL_ACCESS_TOKEN,
  },
});

let mailOption = (fname, email, message, subject) => {
  // console.log(fname, email, subject, message);
  return {
    from: `Free Mailbox <${process.env.GMAIL_USERNAME}>`,
    to: email,
    subject: `${subject}`,
    html: ` <body>
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <a  href="index.html" style="text-decoration: none;">
            <div class="mailtitle">
             
            <div  class="maillogotext">
            <p style="color: #000;font-weight:bold;">Hi, ${fname}</p>
            </div>  
            </div>
                 
        </a>
        
        
        <div id="box">
     
        <p> ${message}</p>
       
        </div>
        <p style="font-size:0.9em;">Thank you,<br />${fname}</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
         
        </div>
      </div>
    </div>
   
  </body>

`,
    auth: {
      type: "Bearer",
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  };
};

module.exports = { transporter, mailOption };
