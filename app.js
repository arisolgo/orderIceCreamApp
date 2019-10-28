const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
db('mongodb+srv://db_user_ariel:S4V3USjaqABcdFwg@cluster0-qobz3.mongodb.net/orderIceCreamApp');
const router = require('./network/routes');
var app = express(); //iniciando express
app.use(bodyParser.json());
router(app);
app.listen(4000); //Puerto de donde va a escuhar
console.log('La aplicación esta escuchando en http://localhost:4000');