var router = require('express').Router();;
var bodyParser = require('body-parser');
// var router = express.Router();

// require model file.
var pollObject = require('../models/pollsDAO');
// module.exports = router;

module.exports = function (app) {
 
  // var router = express.Router();
   
   // parse POST data to json format 
   app.use(bodyParser.json());
   app.use('/polls', router);

   router.route('/')
  .get(function(req,res) {
      // Code to fetch the polls.
      // console.log("/get called")
      // Code to fetch the polls.
      // var pollObject = new pollModel();

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
      // console.log("/post called")
      // var pollObject = new pollModel();
      // Calling our model function.
      // make sure to set content-type header to content-type:application/json
      var data = {
        question: req.body.question,
        options: req.body.polls
      }
      // console.log(typeof req.body.polls)
      // console.log(data) 
      pollObject.addNewPolls(data, function (err, response){
           if(err) {
                response = {"error" : true,
                            "message" : "Error adding poll data"};
           } else {
                response = {"error" : false,
                            "data" : response};
           }
           res.json(response);
      });

  })
  .put(function(req,res) {
    // Code to update votes of poll.
    res.json({"responseCode" : 2})
  });
}
