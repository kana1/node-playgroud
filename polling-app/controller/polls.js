var express = require('express');
var router = express.Router();
// require model file.
var pollModel = require('../models/polls');

router.route('/')
  .get(function(req,res) {
    // Code to fetch the polls.
    console.log("/get called")
    res.status(200).json({"responseCode" : 0})
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