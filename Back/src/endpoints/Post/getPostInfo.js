const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad} = require("../../func/notAllData");

/**
 * @jso @result[] num
 */
module.exports.getPostInfo = (req,res)=>{
    if (!(req.body.id)){
        nad(res);
    }else{
        executeSQL('SELECT p.title as title, p.body as body, p.user_id as owner_id, User.username as username FROM Post p INNER JOIN User on User.id=p.user_id where p.id=?;',[req.body.id],(error,result)=>{
            if (error){
                res.status(500).send('INTERNAL_ERROR');
            }else{
                let json = {
                    title: result[0].title,
                    body: result[0].body,
                    owner_id : result[0].owner_id,
                    username:result[0].username
                }
                executeSQL("SELECT COUNT(*) as num FROM Likes INNER JOIN User on User.id=Likes.user_id where post_id=?;",[req.body.id],(error,result)=>{
                    if (error){
                        res.status(500).send('INTERNAL_ERROR');
                    }else{
                        json.likes = result[0].num
                        executeSQL("SELECT COUNT(*) as num FROM Comment where post_id=?;",[req.body.id],(error,result)=>{
                            if (error){
                                res.status(500).send('INTERNAL_ERROR');
                            }else{
                                json.comments=result[0].num
                                if (req.headers.authorization){
                                    checkAuth(req.headers.authorization,(error,decoded)=>{
                                        if (error){
                                            res.status(403).send('SOMETHING_WRONG');
                                        }else{
                                            executeSQL('SELECT id FROM Likes where post_id=? and user_id=?;',[req.body.id,parseInt(decoded.id)],(error,result)=>{
                                                if (error){
                                                    res.status(500).send('INTERNAL_ERROR');
                                                }else{
                                                    json.liked = !!result[0];
                                                    res.json(json);
                                                }
                                            })
                                        }
                                    })
                                }else{
                                    json.liked=false;
                                    res.json(json);
                                }
                            }
                        })
                    }
                })
            }
        })
    }
}