const {checkAuth} = require("../../func/checkAuth");
const {executeSQL} = require("../../func/mysql");
const {nad, ite} = require("../../func/error");

module.exports.comment = (req,res)=>{
    if (req.body.post_id && req.body.body && req.headers.authorization){
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                res.status(403).send('TOKEN_INVALID_OR_EXPIRED');
            }else{
                executeSQL('INSERT INTO Comment (user_id,post_id,body) VALUES (?,?,?);',[decoded.id,req.body.post_id,req.body.body],(error)=>{
                    if (error){
                        ite(res);
                    }else{
                        executeSQL('SELECT id,time from Comment where post_id=? and user_id=? and body=?', [req.body.post_id,decoded.id,req.body.body],(error,result)=>{
                            if (error){
                                ite(res);
                            }else{
                                res.json({comment_id:result[0].id,time:result[0].time})
                            }
                        })
                    }
                })
            }
        })
    }else{
        nad(res);
    }
}