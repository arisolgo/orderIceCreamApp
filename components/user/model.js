const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
   name: String, //nombre del usuario
   email: String, //correo electronico
   password: String, //contraseña
   order: [], //orden/ordenes del usuario
   ordersPack:[] //listado de ordenes de los usuarios
});


const model = mongoose.model('User', mySchema); //aqui pasamos el esquema exclusivo en la base de datos para User

module.exports = model;