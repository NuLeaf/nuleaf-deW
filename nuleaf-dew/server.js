
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
app.set('port', port);

var options = {};
if (process.env.ENABLE_SSL) {
  options.ca = fs.readFileSync(process.env.CACERT_FILE);
  options.key = fs.readFileSync(process.env.KEY_FILE);
  options.cert = fs.readFileSync(process.env.CERT_FILE);
}

var server = protocol.createServer(options, app);

server.listen(port, function() {
  console.log('API running on port ' + port);
});