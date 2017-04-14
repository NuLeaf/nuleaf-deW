
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var protocol = process.env.ENABLE_SSL ? require('https') : require('http');

var api = require('./server/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'aot')));

app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'aot/index.html'));
});

var port = process.env.PORT || '3000';

var options = {};


if (process.env.ENABLE_SSL) {
  if (process.env.CACERT_FILES) {
    options.ca = process.env.CACERT_FILES.split(' ').map(function(cacert) {
      return fs.readFileSync(cacert, 'utf8');
    });
  }

  if (process.env.KEY_FILE) options.key = fs.readFileSync(process.env.KEY_FILE, 'utf8');
  if (process.env.CERT_FILE) options.cert = fs.readFileSync(process.env.CERT_FILE, 'utf8');
}

var server = protocol.createServer(options, app);

server.listen(port, function() {
  console.log('API running on port ' + port);
});

// Redirect HTTP traffic if on HTTPS
if (process.env.ENABLE_SSL) {
  var http = require('http');
  http.createServer(function(req, res) {
      res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
      res.end();
  }).listen(80);
}