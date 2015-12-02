var express = require('express');
var app = express();

var rtm = require('rtm-js')(
    process.env['RTM_API_KEY'],
    process.env['RTM_API_SECRET']
);

app.get('/', function(req, res) {
  res.send('Test!');
});

app.listen(8080, function() {
  console.log('Listening on port 8080.');
});

