// this will be responsible to handle polling taskes as menstioned below 
   // Creating new poll.
   // Updating votes.
   // Getting all polls.

   // the bridge between app and db (DAO layer)
var mongoOp     =   require("./mongo");


var polls = function () {

     this.getAllPolls = function (callback) {
         // get all the polls
         var response = {};
         mongoOp.find({},function(err,data){
         // Mongo command to fetch all data from collection.
             if(err) {
                 response = {"error" : true,"message" : "Error fetching data"};
             } else {
                 response = {"error" : false,"message" : data};
             }
            callback(null, response);
        });
      }
}

module.exports = polls;