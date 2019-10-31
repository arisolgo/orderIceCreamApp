const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.post('/login', function(req,res){
    console.log(req.body.email, req.body.password)
    controller.login(req.body.email, req.body.password).then((data)=>{
        response.success(req, res, data, 200);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
})



module.exports= router;

