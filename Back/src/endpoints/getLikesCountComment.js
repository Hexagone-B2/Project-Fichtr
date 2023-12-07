const {executeSQL} = require("../func/mysql");
module.exports.getLikesCountComment = (req,res)=>{
    if (req.body.comment_id){
        executeSQL('SELECT COUNT(*) as num FROM LikesComment where comment_id=?',[req.body.comment_id],(error,result)=>{
            if (error){
                res.status(500).send('INTERNAL_ERROR');
            }else{
                res.json({num:result[0].num})
            }
        })
    }
}