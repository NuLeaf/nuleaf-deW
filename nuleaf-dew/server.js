
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

if (process.env.ENABLE_SSL) {
  app.set('ca', process.env.CACERT_FILES.split().map(function(cacert) {
    return fs.readFileSync(cacert, 'utf8');
  }));
  app.set('key', fs.readFileSync(process.env.KEY_FILE, 'utf8'));
  app.set('cert', fs.readFileSync(process.env.CERT_FILE, 'utf8'));
}

var server = protocol.createServer(app);

server.listen(port, function() {
  console.log('API running on port ' + port);
});