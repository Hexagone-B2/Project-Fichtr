const {checkAuth} = require("../func/checkAuth");
const {executeSQL} = require("../func/mysql");
module.exports.unlike = (req,res)=>{
    if (req.body.post_id && req.headers.authorization){
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                console.log(error);
                res.status(403).send('SOMETHING_WRONG');
            }else{
                executeSQL('DELETE FROM Likes where post_id=? and user_id=?;',[parseInt(req.body.post_id),parseInt(decoded.id)],(error)=>{
                    if (error){
                        console.log(error);
                        res.status(500).sen('INTERNAL_ERROR');
                    }else{
                        res.send('OK');
                    }
                })
            }
        })
    }
}