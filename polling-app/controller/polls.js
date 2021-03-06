var express = require('express');
var router = express.Router();

// require model file.
var pollModel = require('../models/pollsDAO');

router.route('/')
  .get(function(req,res) {
      // Code to fetch the polls.
      console.log("/get called")
      // Code to fetch the polls.
      var pollObject = new pollModel();

      // Calling our model function.
      pollObject.getAllPolls(function(err,pollResponse) {
        
        // enable cors
        // res.header('Access-Control-Allow-Origin', '*');
        // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        
        
        if(err) {
          return res.json({"responseCode" : 1, 
                          "responseDesc" : pollResponse});
        }
        res.status(200).json({"responseCode" : 0, 
                              "responseDesc" : "Success", 
                              "data" : pollResponse.message});
      });

  })
  .post(function(req,res) {
      // Code to add new polls.
      console.log("/post called")

      // Calling our model function.
      // make sure to set content-type header to content-type:application/json
      console.log(typeof req.body.polls)
      var data = {
        question: req.body.question,
        options: req.body.polls
      }
      
      //validate 
      if(data.question === undefined || data.options === undefined ){	  
    	  response = {"error" : true,"message" : "Invalid input data type"};
    	  // HTTP 400 = 400 Bad Request
        res.status(400).json(response);
    	  return;
      }
        
        console.log(data);
    	  
    	  var pollObject = new pollModel();

    	  pollObject.addNewPolls(data, function (err){
              if(err) {
                   response = {"error" : true,"message" : "Error adding poll data"};
                   res.status(500);
              } else {
                   response = {"error" : false,"message" : "Poll added"};
              }
              res.json(response);
              return;
    	  });

  })
  .put(function(req,res) {
    // Code to update votes of poll.
    res.json({"responseCode" : 2})
  });

module.exports = router;
