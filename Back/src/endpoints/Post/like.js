const {checkAuth} = require("../../func/checkAuth");
const {executeSQL} = require("../../func/mysql");

module.exports.like = (req,res)=>{
    if (!(req.body.post_id && req.headers.authorization)){
        res.status(403).send('NOT_ALL_DATA');
    }else{
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                res.status(403).send('SOMETHING_WRONG');
            }else{
                executeSQL("SELECT * FROM Likes where user_id=? AND post_id=?;",[parseInt(decoded.id),req.body.post_id],(error,result)=>{
                    if (error){
                        res.status(500).send('INTERNAL_ERROR');
                    }else{
                        if (result[0]){
                            res.status(403).send('ALREADY_LIKED');
                        }else{
                            executeSQL('INSERT INTO Likes (user_id, post_id) VALUES (?,?);',[parseInt(decoded.id),req.body.post_id],(error)=>{
                                if (error){
                                    res.status(500).send('INTERNAL_ERROR');
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