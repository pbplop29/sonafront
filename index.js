const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/sendemail', (req, res) => {
  let data = req.body;
  console.log(req.body);
  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'contact.us.email.sender@gmail.com',
      pass: 'G_yk!`$y+33pm!8;'
    }
  });
  var mailOptions = {
    from: 'contact.us.email.sender@gmail.com',
    to: data.emails,
    subject: 'testing',
    html: `First Name: ${data.firstName}<br>
           Last Name: ${data.lastName}<br>
           Email: ${data.email}<br>
           Contact: ${data.contactNumber}<br>
           Address: ${data.address}<br>
           Subject: ${data.estimatedTransaction}` 
  }
  smtpTransport.sendMail(mailOptions, (error, response)=>{
    if(error){
      res.send(error)
    }
    else{
      res.send('Success')
      console.log('Success')
    }
  })
  smtpTransport.close();
});

const PORT = process.env.PORT||3001;
app.listen(PORT, ()=>{
  console.log('server starting at port 3001');
});

