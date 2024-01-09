const {checkAuth} = require("../../func/checkAuth");
const {executeSQL} = require("../../func/mysql");
const {nad, ite} = require("../../func/error");
module.exports.createSubject = (req,res)=>{
    if (req.headers.authorization && req.body.name){
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                res.status(403).send('SOMETHING_WRONG');
            }else if (decoded.roles === 'admin'){
                executeSQL("INSERT INTO Subject (name) VALUES (?);",[req.body.name],(error)=>{
                    if (error){
                        ite(res);
                    }else{
                        res.send('OK');
                    }
                })
            }else{
                res.status(403).send('NOT_AN_ADMIN')
            }
        })
    }else{
        nad(res);
    }
}