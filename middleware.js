const jwt = require('jsonwebtoken');
const config = require('./config');
const response = require('./network/response')


const checkToken = (req, res, next)=>{
    const token = req.headers['authorization'];
    if (!token) {
        response.error(req, res, 'Authorization token must be provided', 401);
        return;
    }
    jwt.verify( token, config.secret, (success, err) => {
        if (err) {
            response.error(req, res, 'Authorization token is not valid', 401, err);
        } else {
            req.success = success;
            next();
        }
    });
};

module.exports={
    checkToken: checkToken
}