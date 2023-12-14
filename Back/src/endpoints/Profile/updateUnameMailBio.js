const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad, ite} = require("../../func/error");
module.exports.updateUnameMailBio = (req,res) => {
    if (req.headers.authorization && req.body.username && req.body.bio && req.body.mail){
        checkAuth(req.headers.authorization, (error,decoded)=>{
            if (error){
                console.log(error);
                res.status(403).send('SOMETHING_WRONG');
            }else{
                executeSQL("UPDATE User SET username=?,mail=? where id=?;", [req.body.username,req.body.mail,decoded.id], (error)=>{
                    if (error) {
                        console.log(error);
                        ite(res);
                    }else{
                        executeSQL("UPDATE Profile SET bio=? where user_id=?;",[req.body.bio,decoded.id],(error)=>{
                            if (error){
                                console.log(error);
                                ite(res);
                            }else{
                                res.send('OK');
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