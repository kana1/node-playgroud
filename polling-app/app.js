var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var mongoose    =   require("mongoose");
var config = require('./config/config');

var routeController = require('./controller')
/**
  Adding the controllers.
*/

// app.use(bodyParser.json());

routeController(app);
// app.use();

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