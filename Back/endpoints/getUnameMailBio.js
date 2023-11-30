const {executeSQL} = require('../func/mysql');

module.exports.getUnameMailBio = (req,res) => {
    console.log('REQUEST')
    const userid = 1;
    executeSQL('SELECT username,mail,Profile.bio as bio FROM User INNER JOIN Profile on Profile.user_id=User.id WHERE User.id=?;',[userid],(error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).send('INTERNAL_ERROR');
        }else{
            res.json(result[0]);
        }
    })
}