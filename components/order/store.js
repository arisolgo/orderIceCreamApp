const Model = require('./model');

function saveOrder(order){
      const userOrder = new Model(order);
      userOrder.save();
}

async function findOrder(filterOrder){
            let filter = {};
        if(filterOrder!=null){
            filter = {_id: filterOrder}
        }
        const order = await Model.find(filter)
        return order;
}

// async function findOrderById(filterOrder){
//     let filter = {};
//     if(filterOrder){
//         filter = {
//             _id: filterOrder._id
//         }; 
//         const order = await Model.findOne(filter)
//        // return order;
//     }

   
// }

function removeOrder(id){
    return Model.deleteOne({
        _id: id
    });
}


  
module.exports = {
    save:saveOrder,
    find:findOrder,
    // findById:findOrderById,
    delete:removeOrder
}