const {checkAuth} = require("../../func/checkAuth");
const {executeSQL} = require("../../func/mysql");
const {nad, ite} = require("../../func/error");

module.exports.likeComment = (req,res)=>{
    if (req.body.comment_id && req.headers.authorization){
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                res.status(403).send('INVALID_TOKEN_OR_EXPIRED');
            }else{
                executeSQL('INSERT INTO LikesComment (user_id,comment_id) VALUES (?,?);',[decoded.id,req.body.comment_id],(error)=>{
                    if (error){
                        ite(res);
                    }else{
                        res.send('OK');
                    }
                })
            }
        })
    }else{
        nad(res);
    }
}