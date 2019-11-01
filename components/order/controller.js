const store  = require('./store');

function saveOrder(ordersPackId,productName, size, flavor, user, paymentMethod){
    return new Promise((resolve, reject)=>{
        if(!user || !ordersPackId || !productName || !size || !flavor || !paymentMethod){
            reject('Datos incorrectos'); 
            return false;       
        }

        const productDescription = {
            productName:productName,
            size:size,
            flavor:flavor
        }
        
        const fullOrder ={
            ordersPack:ordersPackId,
            description:productDescription,
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

function updateOrder(id, productName, flavor, size) {
    return new Promise(async (resolve, reject) => {

        if (!id || !productName || !size || !flavor) {
            reject('Invalid data');
            return false;
        }
        const description = {
            productName:productName,
            flavor:flavor,
            size:size
        }

        const result = await store.update(id, description);

        resolve(result);
    })
}


module.exports={
    saveOrder,
    findOrder,
    updateOrder,
    deleteOrder
}