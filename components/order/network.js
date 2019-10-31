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

// router.get('/:id', function(req, res){ //en este caso solo me enviara el response con get
//   //  const filterOrders = req.query.order || null;
    
//     controller.findOrderById(req.params.id).then((orderList) =>{
//         response.success(req, res, orderList, 200);
//     })
//     .catch(e =>{
//         response.error(req, res, 'Unexpected Error', 500, e);
//     })

 
// });

router.post('/', function(req, res){ //en este caso solo me enviara el response con post

    controller.saveOrder(req.body.description, req.body.user, req.body.paymentMethod).then((result)=>{
        response.success(req, res, result, 201);
    })
    .catch(e=>{
        response.error(req, res, 'Informacion Invalida', 400, 'Error en el controlador');
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