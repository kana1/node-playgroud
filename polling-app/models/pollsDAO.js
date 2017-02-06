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
                 response = { "error": false, "message": data };
             }
            callback(err, response);
        });
      }
    
    this.addNewPolls = function (pollData,callback) {
        var db = new mongoOp();
        var response = {};

        db.question = pollData.question
        db.polls = pollData.options
        console.log("-----------")
        console.log(db)
        db.save(function(err){
                // console.log(err)
             // save() will run insert() command of MongoDB.
             // it will add new data in collection.
            if (err) {
                // if (err.name == 'ValidationError') {
                //     for (field in err.errors) {
                //         console.log(err.errors[field].message);
                //     }
                // }
                response = { "error": true, "message": "Error adding data" };
            } else {
                response = { "error": false, "message": "Data added" };
            }
                callback(err, response);
        });


    }
}

module.exports = polls;