var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var mongoose    =   require("mongoose");
var config = require('./config/config');
/**
  Adding the controllers.
*/

app.use(bodyParser.json());
app.use(require('./controller'));

mongoose.connect(config.db);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

http.listen(config.port, function(){
  console.log('listening on port '+ config.port);
});
console.log('Pollng app started');

// export app so we can test it
exports = module.exports = app;