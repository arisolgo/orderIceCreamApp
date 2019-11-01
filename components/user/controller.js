const store  = require('./store');

function addUser(name, email, password){

    if(!name || !email || !password){
        return Promise.reject('Invalid name');
    }

    const user = {
        name:name,
        email:email,
        password:password
    };

    return store.add(user)
}

function getUser(filterUser) {
    return new Promise(async (resolve, reject) => {
        return resolve(store.list(filterUser));
    });
}

function deleteUser(id){
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
    addUser,
    getUser,
    deleteUser
}