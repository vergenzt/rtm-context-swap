var express = require('express');
var app = express();

var rtm = new (require('rtm-js'))(
    process.env['RTM_API_KEY'],
    process.env['RTM_API_SECRET'],
    'delete'
);
rtm.auth_token = process.env['RTM_AUTH_TOKEN'];

app.put('/:tag', function(req, res) {
  var tag = req.params['tag'];
  rtm.get('rtm.tasks.getList', {filter: 'tag:' + tag}, function(rsp) {
    res.send(rsp);
  });
});

var port = process.env['PORT'] || 8080;
app.listen(port, function() {
  console.log('Listening on port ' + port + '.');
});

