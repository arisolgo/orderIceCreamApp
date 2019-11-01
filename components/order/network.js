const express = require('express');
const response =  require('../../network/response'); //Llamamos al modulo de Response para las respuestas
const controller = require('./controller') //accediendo a todas las funciones de controller
const router = express.Router(); //Nos permite separar cabeceras, metodos, url.


router.get('/', function(req, res){ //en este caso solo me enviara el response con get
    const filterOrders = req.query.order || null; //si tengo algo que filtrar lo filtro 
    
    controller.findOrder(filterOrders).then((orderList) =>{
        response.success(req, res, orderList, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e);
    })

 
});


router.post('/', function(req, res){ //en este caso solo me enviara el response con post
    console.log(req.body.ordersPackId, req.body.productName, req.body.flavor, req.body.size, req.body.user, req.body.paymentMethod);
    controller.saveOrder(req.body.ordersPackId, req.body.productName, req.body.flavor, req.body.size, req.body.user, req.body.paymentMethod).then((result)=>{
        response.success(req, res, result, 201);
    })
    .catch(e=>{
        response.error(req, res, 'Informacion Invalida', 400, 'Error en el controlador');
    });
});

router.patch('/:id', function (req, res) {
    controller.updateOrder(req.params.id, req.body.productName, req.body.flavor, req.body.size)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida', 500, e);
        });
});

router.delete('/:id', function(req, res){
    controller.deleteOrder(req.params.id).then(()=>{
        response.success(req, res, `Orden ${req.params.id} eliminada`, 200);
    }).
    catch(e=>{
        response.error(req, res, 'Error Interno', 500, e);
    })
})

module.exports = router;