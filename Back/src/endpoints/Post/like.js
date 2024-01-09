const {checkAuth} = require("../../func/checkAuth");
const {executeSQL} = require("../../func/mysql");
const {nad, ite} = require("../../func/error");

module.exports.like = (req,res)=>{
    if (!(req.body.post_id && req.headers.authorization)){
        nad(res);
    }else{
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                res.status(403).send('SOMETHING_WRONG');
            }else{
                executeSQL("SELECT * FROM Likes where user_id=? AND post_id=?;",[parseInt(decoded.id),req.body.post_id],(error,result)=>{
                    if (error){
                        ite(res);
                    }else{
                        if (result[0]){
                            res.status(403).send('ALREADY_LIKED');
                        }else{
                            executeSQL('INSERT INTO Likes (user_id, post_id) VALUES (?,?);',[parseInt(decoded.id),req.body.post_id],(error)=>{
                                if (error){
                                    ite(res);
                                }else{
                                    res.send('OK');
                                }
                            })
                        }
                    }
                })
            }
        })

    }
}