const user = require('../components/user/network');
// const auth = require('../components/auth/network');
const order = require('../components/order/network');
const session = require('../components/session/network');
const middleware = require('../middleware')
const ordersPack = require('../components/ordersPack/network')

const routes = function(server){
    server.use('/session', session)
  //  server.use(middleware.checkToken);
    server.use('/user', user)
    // server.use('/auth', auth)
    server.use('/order', order)
    server.use('/ordersPack', ordersPack)
    
    

}

module.exports =  routes;