const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad, ite} = require("../../func/error");

module.exports.getComments = (req,res)=>{
    if (req.body.post_id){
        executeSQL("SELECT " +
            "Comment.id as id," +
            "Comment.user_id," +
            "Comment.body," +
            "User.username as username," +
            "COUNT(LikesComment.id) as likes_count " +
            "FROM Comment " +
            "INNER JOIN User ON User.id = Comment.user_id " +
            "LEFT JOIN LikesComment ON LikesComment.comment_id = Comment.id " +
            "WHERE Comment.post_id = ? " +
            "GROUP BY Comment.id;", [parseInt(req.body.post_id)], (error, result) => {
            if(error){
                ite(res);
            } else
                if (req.headers.authorization){
                    checkAuth(req.headers.authorization,(error,decoded)=>{
                        if (error){
                            res.json(result)
                        }else{
                            executeSQL('SELECT LikesComment.comment_id FROM LikesComment LEFT JOIN Comment on Comment.id=LikesComment.comment_id where Comment.post_id=? and LikesComment.user_id=?',[parseInt(req.body.post_id),decoded.id],(error,result2)=>{
                                if (error){
                                    res.json(result);
                                }else{
                                    const result2Index = {};
                                    result2.forEach((element2) => {
                                        result2Index[element2.comment_id] = true;
                                    });
                                    result.map((element) => {
                                        element.liked = result2Index[element.id] === true;
                                    });
                                    res.json(result)
                                }
                            })
                        }
                    });
                } else {
                    res.json(result)
                }

        })
    }else{
        nad(res);
    }
}