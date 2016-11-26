var mongoose    =   require("mongoose");
var config = require('../config/config');
mongoose.connect(config.db);
/*
   * MongoDB port is 27017 by default.
   * Assuming you have created mongoDB database named "pollsDb".
*/

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var pollSchema  = {
    "question" : String,
    "polls" : [{
         "option" : String,
         "vote" : Number
    }]
};

// create model if not exists.
module.exports = mongoose.model('polls', pollSchema);