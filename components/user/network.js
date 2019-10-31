const express = require('express');
const response =  require('../../network/response'); //Llamamos al modulo de Response para las respuestas
const controller = require('./controller') //accediendo a todas las funciones de controller
const router = express.Router();

router.post('/register', function(req, res){
    controller.addUser(req.body.name, req.body.email, req.body.password).then((data)=>{
        response.success(req,res,data,201);
    })
    .catch(err=>{
        response.error(req, res, 'Internal error', 500, err);
    })
})

router.get('/', function(req, res){
    const filterUser = req.query.name || null;

    controller.getUser(filterUser)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(error => {
            response.error(req, resp, 'Internal Error', 500, error);
        })
});

module.exports = router;