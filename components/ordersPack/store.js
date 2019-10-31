const model = require('./model');

function saveOrdersPack(ordersPack){
    const createdPack = new model(ordersPack);
    createdPack.save();
}

async function findOrdersPack(filterPack){
    let filter = {};
    if(filterPack!=null){
        filter ={_id: filterPack}
    }
    const ordersPack = await model.find(filter);
    return ordersPack;
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