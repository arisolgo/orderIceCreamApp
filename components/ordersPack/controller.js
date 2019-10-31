const store = require('./store')

function saveOrdersPack(creator, duration){
    return new Promise((resolve, reject)=>{
        if(!creator){
            reject('Usuario invalido')
            return false;
            }
    
        


    // var packDuration = new Date();
    // packDuration.setMinutes(packDuration.getMinutes() + duration)
        const fullOrdersPack = {
            userCreator: creator,
            startTime: new Date(), 
        }

        const expirationDate = fullOrdersPack.startTime.setMinutes(fullOrdersPack.startTime.getMinutes() + duration)
        const actualTime = new Date();
     //   const timeLeft =  expirationDate.getMinutes() - actualTime.getMinutes();
        
        const fullPackage = {
            userCreator: fullOrdersPack.userCreator,
            startTime: fullOrdersPack.startTime,
            expirationDate: expirationDate,
           // timeLeft: timeLeft
            
        }
    store.save(fullPackage);
    resolve(fullPackage)
})
}

function getOrdersPack(filterPack){
    return new Promise((resolve, reject)=>{
        resolve(store.find(filterPack));
    })
}

function deleteOrdersPack(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('Id invalido')
            return false;
        }
        store.remove(id).
        then(()=>{
            resolve();
        }).
        catch(e=>{
            reject(e)
        })
    })
}

module.exports = {
    save:saveOrdersPack,
    list:getOrdersPack,
    delete:deleteOrdersPack
}
