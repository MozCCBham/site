var express = require('express')
var app = express()
var bodyParser   = require('body-parser');
var nodemailer = require('nodemailer');
var configMailer = require('./config/mailer.js');

app.use(bodyParser()); // get information from html forms

app.use(express.static('public'))

// create reusable transporter object using the default SMTP transport
var up = 'smtps://' + encodeURIComponent(configMailer.username) +':' + configMailer.password + '@smtp.gmail.com';

var transporter = nodemailer.createTransport(up);

var mailOptions = {
            from: '"worker" < '+ configMailer.username + '>', // sender address
            to: 'jmtrik@gmail.com', // list of receivers
            subject: 'Message for MozCCBham ✔' // Subject line
          };


app.post('/mail', function (req, res) {

  //res.send('Mail sent')
  // send mail with defined transport object
    mailOptions.html = 'You have been sent an message.<br>'
                      +'From:<br>'
                      +'Name: ' + req.body.name + '<br>'
                      +'Email: ' + req.body.email + '<br>'
                      +'Phone number: ' + req.body.phone + '<br>'
                      +'Message:<br>' + req.body.message;

    // plaintext body
    //mailOptions.text = mailOptions.html; // html body

    // console.log(mailOptions);
          transporter.sendMail(mailOptions, function(error, info){
            if(error){
              return console.log(error);
            }
            res.send('Mail sent');
            // console.log('Message sent: ' + info.response);
          });


})

app.listen(8080, function () {
  console.log('mozccbham site listening on port 8080!')
})
