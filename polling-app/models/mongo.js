var mongoose    =   require("mongoose");

/*
   * MongoDB port is 27017 by default.
   * Assuming you have created mongoDB database named "pollsDb".
*/

// create instance of Schema
var MongoSchema =   mongoose.Schema;
// create schema
var pollSchema  = MongoSchema({
    "question": {
        type: String,
        required: true
    },
    "polls" : [{
         "option" : String,
         "vote" : Number
    }]
});

// this transform _id to id.
pollSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
}); 

// create model if not exists.
module.exports = mongoose.model('polls', pollSchema);