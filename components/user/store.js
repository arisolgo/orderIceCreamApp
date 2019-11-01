const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

async function getUser(filterUser) {
    return new Promise((resolve, reject)=>{
        let filter = {};

        if (filterUser) {
            filter['_id'] = filterUser;
        }
    
        Model.find(filter).populate('order').populate('ordersPack').exec((error, populated)=>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated)
        })
    })
   
}

function deleteUser(id){
    return model.deleteOne({
        _id:id
    });
}




module.exports = {
    add:addUser,
    list:getUser,
    delete:deleteUser
}