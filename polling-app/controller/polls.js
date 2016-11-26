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
    res.json({"done":"yes"});
  })
  .put(function(req,res) {
    // Code to update votes of poll.
    res.json({"responseCode" : 2})
  });

module.exports = router;