const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
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
                        res.status(500).send('INTERNAL_ERROR');
                    }else{
                        executeSQL("UPDATE Profile SET bio=? where user_id=?;",[req.body.bio,decoded.id],(error)=>{
                            if (error){
                                console.log(error);
                                res.status(500).send('INTERNAL_ERROR');
                            }else{
                                res.send('OK');
                            }
                        })
                    }
                })
            }

        })
    }else{
        res.status(403).send('NOT_ALL_DATA');
    }
}