const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema = new Schema({
   user: {
       type: Schema.ObjectId,
        ref: 'User'
    },
    token:String
    
});


const model = mongoose.model('session', mySchema); //aqui pasamos el esquema exclusivo en la base de datos para User

module.exports = model;