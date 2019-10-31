const user = require('../components/user/network');
// const auth = require('../components/auth/network');
const order = require('../components/order/network');
const session = require('../components/session/network');

const routes = function(server){
    server.use('/user', user)
    // server.use('/auth', auth)
    server.use('/order', order)
    server.use('/session', session)

}

module.exports =  routes;