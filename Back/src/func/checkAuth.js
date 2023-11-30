const jwt = require('jsonwebtoken');
const key = require('secret_key');

module.exports.checkAuth = (token, callback) => {
    jwt.verify(token,key,(error, decoded)=>{
        callback(error,decoded);
    })
}
