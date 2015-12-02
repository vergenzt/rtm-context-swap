var express = require('express');
var app = express();

var rtm = require('./rtm');

app.put('/+/:tag', function(req, res) {
  var tag = req.params['tag'];
  rtm.tagEnable(tag, function(rsp) {
    res.send(rsp);
  });
});

var port = process.env['PORT'] || 8080;
app.listen(port, function() {
  console.log('Listening on port ' + port + '.');
});

