const store  = require('./store');

function saveOrder(orderDescription, user, paymentMethod){
    return new Promise((resolve, reject)=>{
        if(!user || !orderDescription ){
            reject('Datos incorrectos'); 
            return false;       
        }

        
        const fullOrder ={
            description:orderDescription,
            userId:user,
            paymentMethod:paymentMethod,
        }

        store.save(fullOrder);
        resolve(fullOrder);
    });
}

function findOrder(filterOrder){
    return new Promise((resolve, reject)=>{
        resolve(store.find(filterOrder));
    })
}

// function findOrderById(orderId){
//     return new Promise((resolve, reject)=>{
//         resolve(store.find(orderId));
//     })
// }

function deleteOrder(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('Id invalido')
            return false;
        }
        store.delete(id).
        then(()=>{
            resolve();
        }).
        catch(e=>{
            reject(e)
        })
    })
}

module.exports={
    saveOrder,
    findOrder,
    deleteOrder
}