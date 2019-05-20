const request = require('request');

request('https://geekbrains.ru', (err, res, body) => {
  if(!err && res.statusCode === 200) {
    console.log(body);
  }
});

request({
  method: 'POST',
  url: '',
  form: {}
}, (err, res, body) => {
  if(!err && res.statusCode === 200) {
    console.log(body);
  }
});