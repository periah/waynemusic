var request = require("request");

var data = {
    'api_token': '68396951c3d5446143ce791b388bb5dd',
    'url': 'https://ljs.ijjiii.is/b344edddbeef5f0682ac8b19b61c2b66/p84O3JAp_IM/urwceawemewemn',
    'skip': '3',
    'every': '1',
    'accurate_offsets': '1',
};

request({
    uri: 'https://enterprise.audd.io/',
    form: data,
    method: 'POST'
  }, function (err, res, body) {
    console.log(body);
});
