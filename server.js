var express = require('express')
var app = express()
var nodemailer = require('nodemailer');
var configMailer = require('./config/mailer.js');

console.log(encodeURIComponent(configMailer.username));
console.log(configMailer.password);


// create reusable transporter object using the default SMTP transport
var up = 'smtps://' + encodeURIComponent(configMailer.username) +':' + configMailer.password + '@smtp.gmail.com';
console.log(up);

var transporter = nodemailer.createTransport(up);

var mailOptions = {
            from: '"worker" < '+ configMailer.username + '>', // sender address
            to: 'jmtrik@gmail.com', // list of receivers
            subject: 'Message for MozCCBham ✔' // Subject line
          };



app.use(express.static('public'))

app.post('/mail', function (req, res) {
  //res.send('Mail sent')
  // send mail with defined transport object
    mailOptions.text = 'You have been sent an message.<br>'; // plaintext body
    mailOptions.html = '<b>You have been sent an message.</b>'; // html body
    
    console.log(mailOptions);
          transporter.sendMail(mailOptions, function(error, info){
            if(error){
              return console.log(error);
            }
            res.send('Mail sent');
            console.log('Message sent: ' + info.response);
          });


})

app.listen(8080, function () {
  console.log('mozccbham site listening on port 8080!')
})
