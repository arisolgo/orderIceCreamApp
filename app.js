const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const config = require('./config');
const router = require('./network/routes');

db(config.dbUrl);
var app = express(); //iniciando express
app.use(bodyParser.json());
router(app);
app.listen(config.port); //Puerto de donde va a escuchar
console.log('La aplicación esta escuchando en '+config.host+':'+config.port);