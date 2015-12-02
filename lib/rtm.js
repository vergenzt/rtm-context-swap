var rtm = new (require('rtm-js'))(
    process.env['RTM_API_KEY'],
    process.env['RTM_API_SECRET'],
    'delete'
);
rtm.auth_token = process.env['RTM_AUTH_TOKEN'];

module.exports = {
    tagEnable: function(tag, cb) {
        rtm.get('rtm.tasks.getList', {filter: 'tag:' + tag}, function(rsp) {
            cb(rsp);
        });
    }
}

