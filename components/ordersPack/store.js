const model = require('./model');

function saveOrdersPack(ordersPack){
    const createdPack = new model(ordersPack);
    createdPack.save();
}

async function findOrdersPack(filterPack){
    return new Promise((resolve, reject)=>{
        let filter = {};
        if(filterPack!=null){
            filter ={_id: filterPack}
        }
         model.find(filter).populate({path:'userCreator', select: 'name'}).populate('orders').exec((error, populated)=>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated)
        })

    })
   
}

function deleteOrdersPack(id){
    return model.deleteOne({
        _id:id
    });
}

module.exports = {
    save:saveOrdersPack,
    find:findOrdersPack,
    remove:deleteOrdersPack
}