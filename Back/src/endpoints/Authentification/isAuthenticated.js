const {checkAuth} = require("../../func/checkAuth");
const {nad} = require("../../func/error");
const {SECRET_KEY} = require("../../func/secret_key");
const jwt = require('jsonwebtoken')

module.exports.isAuthenticated = (req,res)=>{
    if (!(req.headers.authorization)){
        nad(res);
    }else{
        checkAuth(req.headers.authorization, (error,decoded)=>{
            if (error){
                res.status(401).send('NOT_AUTHENTICATED');
            }else{
                delete decoded['exp']
                delete decoded['iat']
                const result = {
                    user: decoded,
                    authenticated: true,
                    refreshedToken: jwt.sign(decoded, SECRET_KEY, {expiresIn: 60 * 60})
                }
                res.json(result);
            }
        })
    }
}
