const {executeSQL} = require("../../func/mysql");
const path = require('path');
const {nad, ite} = require("../../func/error");

module.exports.getProfilePic = (req, res) => {
    if (!(req.query.id)){
        nad(res);
    }else{
        executeSQL('SELECT profile_pic from Profile where id=?;',[req.query.id],(error,result)=>{
            if (error){
                ite(res);
            }else if (!(result[0])){
                res.status(403).send('NO_USER_FOUNDED');
            }else{
                try{
                    res.sendFile(path.resolve(__dirname + "/../../../public/profile_pic/" + result[0].profile_pic))
                }catch(e){
                    ite(res);
                }

            }
        })
    }

}