const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('./secret_key');

module.exports.checkAuth = (token, callback) => {
    jwt.verify(token,SECRET_KEY,(error, decoded)=>{
        callback(error,decoded);
    })
}