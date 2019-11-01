const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
   

    userCreator: {
        type: Schema.ObjectId,
        ref: "User",
    } ,

    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }],

    startTime:Date,
    expirationTime:Date,
    timeLeft:Number,
    

});

const model = mongoose.model('OrdersPack', mySchema); 

module.exports = model;
