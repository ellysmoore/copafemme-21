const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  pool: true,
  host: "mail.copafemme.com",
  port: 587,
  secureConnection: false,
  auth: {
    user: "info@copafemme.com",
    pass: "1nf0",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take messages!");
  }
});

app.post("/send", (req, res) => {
  const {
    fullname,
    email,
    subject,
    message,
    teamName,
    phoneNumber,
    sportType,
    playerNames,
  } = req.body;
  console.log(req.body);

  let maillist = [
    "info@copafemme.com",
    "damilade@copafemme.com",
    "damilola@copafemme.com",
  ];
  let htmlTemp = "";
  if (message) {
    htmlTemp = `<h3>Fullname: ${fullname}</h3>
    <p>Message: ${message}</p>`;
  } else if (playerNames) {
    htmlTemp = `<h3>Sport Type: ${sportType}</h3>
    <h3>Team Name: ${teamName}</h3>
    <p>Contact Phone Number: ${phoneNumber}</p>
    <h3>Player Names: </h3>
    <p>${playerNames}</p>`;
  }

  transporter
    .sendMail({
      to: maillist,
      from: email,
      subject: subject ? subject : "Team Registration",
      html: htmlTemp,
    })
    .then(() => {
      if(message){
        res.send("Message sent successfully");
      }
      else {
        res.send("Team registered successfully");
      }
      console.log("Message sent successfully");
    })
    .catch((err) => {
      if(err) {
        transporter
          .sendMail({
            to: maillist,
            from: email,
            subject: subject ? subject : "Team Registration",
            html: htmlTemp,
          })
          .then(() => {
            res.send("Message sent successfully");
            console.log("Message sent successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

PORT = process.env.PORT || 3004;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
