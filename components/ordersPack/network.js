const express = require('express');
const response =  require('../../network/response');
const controller = require('./controller') 
const router = express.Router(); 


router.post('/', function(req, res){
    controller.save(req.body.user, req.body.duration).then((data)=>{
        response.success(req,res,data,201);
    })
    .catch(err=>{
        response.error(req, res, 'Internal error', 500, err);
    })
})


router.get('/', function(req, res){ 
    const filterOrders = req.query.order || null; 
    
    controller.findOrder(filterOrders).then((orderList) =>{
        response.success(req, res, orderList, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e);
    })

 
});

module.exports = router;
