require("dotenv").config();
const nodemailer = require("nodemailer");

const sendMail = (email, subject, message, name) => {
  const transporter = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
      user: process.env.RECEIVER_EMAIL,
      pass: process.env.RECEIVER_EMAIL_PASSWORD,
    },
  });

  const options = {
    from: "nikola_barselona@hotmail.com",
    to: "ristoski.nikola@gmail.com",
    subject: "My Portfolio Contact",
    html: `
    <p>Name: ${name}</p>
    <p>Sender Email: ${email}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>
    `,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Send" + info.response);
  });
};

module.exports = sendMail;
