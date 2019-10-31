 const store = require('./store');

 


function login(email, password){
    if(!email || !password){
        return Promise.reject('Invalid email or password');
    }
    const logged = {
        email: email,
        password: password,
    };
  
    return store.login(logged);
}

module.exports = {
    login:login
}


