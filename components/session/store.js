const User = require('../user/model');
const Model = require('./model');
const jwt = require('jsonwebtoken')
const config =  require('../../config')



async function login(loggedUser) {
   
    let filter = {};

    if (loggedUser) {
        filter ={
            email: loggedUser.email,
            password: loggedUser.password
        }
    }

    const authUser = await User.findOne(filter);
    if(authUser){
        const jToken = jwt.sign({loggedUser}, config.secret);
        // const auth ={token:jToken}
        const session={
            user:authUser,
            token:jToken
        }
        
        return new Model(session);

    }
    // var modelLogin = new Login()
    // modelLogin.user = users;
    // modelLogin.success = true;
    // return modelLogin;
}

module.exports = {
    login: login
}