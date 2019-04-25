var request = require('request');
var config = require('./config');
var twitter = require('twitter');

functions = {
   authorize : function(req, res) {
    var header = config.consumerKey + ':' + config.consumerSecret;
    var enheader = new Buffer(header).toString('base64');
    var finalHeader = 'Basic ' + enheader;

    let response = request.post(
      'https://api.twitter.com/oauth2/token',
      {form : {'grant_type':'client_credentials'}, headers : {Authorization : finalHeader}},
      function(error, response, body) {
          config.bearerToken = JSON.parse(body).access_token;
          res.json({success: true, data: config.bearerToken});
      });
  },

  search : async function(req, res) {
    var searchquery = req.body.query;
    var ensearchquery = encodeURIComponent(searchquery);

    var bearerHeader = 'Bearer ' + config.bearerToken;

    let response = await request.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=' + ensearchquery + '&result_type= popular',
      {headers : {Authorization : bearerHeader}},
      function(error, response, body) {
        res.json({success : true, data : JSON.parse(body)});
    })
  },

  postTweet : function(req, res) {
    var client = new twitter({
      consumer_key: config.consumerKey,
      consumer_secret: config.consumerSecret,
      access_token_key: config.accessToken,
      access_token_secret: config.accessTokenSecret,
      bearer_token : config.bearerToken
    });

    var status = req.body;

    res.send(status);

    client.post('statuses/update', status ,  function(error, tweet, response) {
      if(error) throw error;
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
    });
  }
}

module.exports = functions;
