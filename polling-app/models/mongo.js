var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/polls');
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
module.exports = mongoose.model('polls',userSchema);