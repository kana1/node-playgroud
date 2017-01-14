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
        if(err) {
          return res.json({"responseCode" : 1, 
                          "responseDesc" : pollResponse});
        }
        res.status(200).json({"responseCode" : 0, 
                              "responseDesc" : "Success", 
                              "data" : pollResponse});
      });

  })
  .post(function(req,res) {
      // Code to add new polls.
      console.log("/post called")
      var pollObject = new pollModel();
      var isvalidated = false;
      // Calling our model function.
      // make sure to set content-type header to content-type:application/json
      var data = {
        question: req.body.question,
        options: req.body.polls
      }
      
      //validate 
      if(!(data.question === undefined ) || !(data.options === undefined )){
    	  isvalidated = true;
    	  console.log(typeof req.body.polls)
          console.log(data)
      }else{
    	  isvalidated = false;
    	  console.log(data);
    	  response = {"error" : true,"message" : "Invalid input data type"};
    	  res.json(response);
      }
      
      if(isvalidated){
    	  
    	  pollObject.addNewPolls(data, function (err){
              if(err) {
                   response = {"error" : true,"message" : "Error adding poll data"};
              } else {
                   response = {"error" : false,"message" : "Poll added"};
              }
              res.json(response);
    	  });
    	  
      }
       
    	  
      
      
     

  })
  .put(function(req,res) {
    // Code to update votes of poll.
    res.json({"responseCode" : 2})
  });

module.exports = router;