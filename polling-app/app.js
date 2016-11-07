var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);

/**
  Adding the controllers.
*/

app.use(bodyParser.json());
app.use(require('./controller'));

http.listen(3000, function(){
  console.log('listening on port 3000');
});
console.log('Pollng app started');

// export app so we can test it
exports = module.exports = app;