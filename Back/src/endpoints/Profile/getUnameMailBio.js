const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad} = require("../../func/notAllData");

module.exports.getUnameMailBio = (req,res) => {
    if (!(req.headers.authorization)){
        nad(res);
    }else{
        checkAuth(req.headers.authorization,(error,decoded)=>{
            executeSQL('SELECT User.id,username,mail,Profile.bio as bio FROM User INNER JOIN Profile on Profile.user_id=User.id WHERE User.id=?;',[parseInt(decoded.id)],(error,result)=>{
                if (error) {
                    console.log(error);
                    res.status(500).send('INTERNAL_ERROR');
                }else{
                    res.json(result[0]);
                }
            })
        })
    }
}