var request = require("request");

var data = {
    'api_token': '68396951c3d5446143ce791b388bb5dd',
    'url': 'https://ytmp3.cc/youtube-to-mp3/',
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
