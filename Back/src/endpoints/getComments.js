const {executeSQL} = require("../func/mysql");
module.exports.getComments = (req,res)=>{
    console.log(req.body)
    if (req.body.post_id){
        executeSQL('SELECT id,user_id,body,time FROM Comment WHERE post_id=? ORDER BY time;',[parseInt(req.body.post_id)],(error,result)=>{
            if(error){
                res.status(500).send('INTERNAL_ERROR');
            }else{
                res.json({comments:result});
            }
        })
    }else{
        res.status(403).send('NOT_ALL_DATA');
    }
}