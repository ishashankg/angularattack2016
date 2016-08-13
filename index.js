module.exports = require('./node_modules/twitter-js-client/lib/Twitter');

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var config = {
    "consumerKey": "VRmxvjPkZ17hC141PqD9IU70g",
    "consumerSecret": "1qBWrCUQhESbbgbmRqzfhMmSJRUg1sT4K9uSAmeQCZTHRWlwkg",
    "accessToken": "4109183117-6cWIemFJ3PydGfJWVfY73DDN5xDOmvKIkcIaeGh",
    "accessTokenSecret": "GAWFiu20qLDdGUv7G16YQ2ai8f2TBqtypsiBaTYOOEORs"
};

var twitter = new module.exports.Twitter(config);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/*
 * To connect to a front end app (i.e. AngularJS) store all your files you will *
 * statically store in declared below (i.e. ./public) *
*/

app.use(express.static('web'));

//post to retrieve user data
app.post('/twitter/user', function (req, res) {
	var username = req.body.username;
	console.log("username : "+username);
	var data = twitter.getUserTimeline({ screen_name: username, count: '10'},function(err, response, body){
		console.log("Error");
	},function (data){
		res.send(data);
	});
});

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
});