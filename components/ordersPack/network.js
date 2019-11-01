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
    const filterOrdersPack = req.query.order || null; 
    
    controller.list(filterOrdersPack).then((orderList) =>{
        response.success(req, res, orderList, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e);
    })

 
});

router.delete('/:id', function(req, res){
    controller.delete(req.params.id).then(()=>{
        response.success(req, res, `Lista de orden ${req.params.id} eliminada`, 200);
    }).
    catch(e=>{
        response.error(req, res, 'Error Interno', 500, e);
    })
})


module.exports = router;
