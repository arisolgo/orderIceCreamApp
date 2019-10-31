const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    description:String,
    price:Number,

    userId: {
        type: Schema.ObjectId,
        ref: "User",
    } ,

 paymentMethod:String,
//  {
//        CASH:1,
//        CREDITCARD:2,

//        properties:{
//             1:{name:"cash"},
//             2:{name:"creditCard"}
//        }
//    },
   payed:false


});

const model = mongoose.model('Order', mySchema); 

module.exports = model;
