var express = require('express');
var app = express();

var rtm = require('rtm-js')(
    process.env['RTM_API_KEY'],
    process.env['RTM_API_SECRET']
);

app.get('/', function(req, res) {
  res.send('Test!');
});

var port = process.env['PORT'] || 8080;
app.listen(port, function() {
  console.log('Listening on port ' + port + '.');
});

