var request = require("request");

var data = {
    'url': 'https://audd.tech/example1.mp3',
    'return': 'apple_music,spotify',
    'api_token': 'test'
};

request({
    uri: 'https://api.audd.io/',
    form: data,
    method: 'POST'
  }, function (err, res, body) {
    console.log(body);
});
