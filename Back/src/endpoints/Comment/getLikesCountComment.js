const {executeSQL} = require("../../func/mysql");
const {ite} = require("../../func/error");

module.exports.getLikesCountComment = (req,res)=>{
    if (req.body.comment_id){
        executeSQL('SELECT COUNT(*) as num FROM LikesComment where comment_id=?',[req.body.comment_id],(error,result)=>{
            if (error){
                ite(res);
            }else{
                res.json({num:result[0].num})
            }
        })
    }
}