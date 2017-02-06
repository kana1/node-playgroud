var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose    =   require("mongoose");
var config = require('./config/config');
/**
  Adding the controllers.
*/

app.use(bodyParser.json());

// enable cors
// this line must come before declaring routers.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// add routers
app.use(require('./controller'));

mongoose.connect(config.db);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

//application listens to port mentioned in the configuration
app.listen(config.port, function(err){
  if(err) throw err;
  console.log("App listening on port "+config.port);
});
console.log('Pollng app started');

// export app so we can test it
exports = module.exports = app;