const {executeSQL} = require("../func/mysql");

module.exports.getProfilePic = (req, res) => {
    if (!(req.body.id)){
        res.status(403).send('NOT_ALL_DATA');
    }else{
        executeSQL('SELECT profile_pic from Profile where id=?;',[req.body.id],(error,result)=>{
            if (error){
                res.status(500).send('INTERNAL_ERROR');
            }else if (!(result[0])){
                res.status(403).send('NO_USER_FOUNDED');
            }else{
                try{
                    res.sendFile(__dirname + "/public/profile_pic" + result[0].profile_pic);
                }catch(e){
                    res.status(500).send('INTERNAL_ERROR');
                    console.log(e);
                }

            }
        })
    }

}