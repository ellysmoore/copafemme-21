const express = require('express')
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const transporter = nodemailer.createTransport({
  pool: true,
  host: 'mail.copafemme.com',
  port: 587,
  secureConnection: false,
  auth: {
    user: 'test@copafemme.com',
    pass: 'copafemmeTest1234',
  },
  tls:{
    rejectUnauthorized: false
}
});

transporter.verify(function (err, success){
  if(err) {
    console.log(err);
  } else {
    console.log("Server is ready to take messages!");
  }
});

app.post('/send', (req, res) => {
  const {fullname, email, subject, message} = req.body;
  console.log(req.body)

  let maillist = [
    'test@copafemme.com',
    'test_two@copafemme.com'
  ];

  transporter.sendMail({
    to: maillist,
    from: email,
    subject: subject,
    html: `<h3>${fullname}</h3>
    <p>${message}</p>`,
  }).then(() => {
    res.send('Message sent successfully')
    console.log('Message sent successfully');
  }).catch(err =>{
    console.log(err);
  })
});

PORT = process.env.PORT || 3060


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))