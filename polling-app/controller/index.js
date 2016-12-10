// var express = require('express');
// var router = express.Router();

/**
  * @description
  * First route will handle the static html file delievery.
  * Second route will handle the API calls.
*/


// module.exports = router;
module.exports = function (app) {
  
  // var route = express.Router();
  var pollsRoute = require('./polls');
  
  //API home page
  app.use('/',require('./home'));
  
  // polls routing
  pollsRoute(app);
  // app.use('/polls',require('./polls'));

}