var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');


router.get('/', function(req, res) {
  res.status(200).json({status: 'OK'});
});


router.get('/contact', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: '',
    auth: {
      user: 'contact@nuleaftech.com',
      pass: 'password'
    }
  });

  var mailOptions = {
    from: 'contact@nuleaftech.com',
    to: 'contact@nuleaftech.com',
    subject: 'Hello',
    text: 'Hello world'
  };

  transporter.sendMail(mailOptions, function(err) {
    if (err) {
      console.log(err);
      res.status(500).json({status: 'FAILED'});
    }
    else res.status(200).json({status: 'SENT'});
  });
});

module.exports = router;