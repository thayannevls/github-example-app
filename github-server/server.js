var axios = require('axios');
var express = require('express');
require('dotenv').config();
var app = express();

app.get('/oauth', function (req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token'
  const CODE = req.query.code

  axios({
    method: 'post',
    url: GITHUB_AUTH_ACCESSTOKEN_URL,
    data: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: CODE
    }
  })
  .then(function (response) {
    const params = new URLSearchParams(response.data);
    const access_token = params.get('access_token');

  	res.redirect('http://localhost:4200/auth?token=' + access_token);
    console.log('Success ' + access_token);
  })
  .catch(function (error) {
    console.error('Error ' + error.message)
  })
});

app.listen(3000, function () {
  console.log('OAuth listening on port 3000!');
});
