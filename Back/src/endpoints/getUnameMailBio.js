const {executeSQL} = require('../func/mysql');

module.exports.getUnameMailBio = (req,res) => {
    if (!(req.body.id)){
        res.status(403).send('NOT_ALL_DATA');
    }
    executeSQL('SELECT username,mail,Profile.bio as bio FROM User INNER JOIN Profile on Profile.user_id=User.id WHERE User.id=?;',[req.body.id],(error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).send('INTERNAL_ERROR');
        }else{
            res.json(result[0]);
        }
    })
}