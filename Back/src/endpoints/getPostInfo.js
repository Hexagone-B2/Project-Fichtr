const {executeSQL} = require('../func/mysql.js');
const {checkAuth} = require("../func/checkAuth");

/**
 * @jso @result[] num
 */
module.exports.getPostInfo = (req,res)=>{
    if (!(req.body.id)){
        res.status(403).send('NOT_ALL_DATA');
    }else{
        executeSQL('SELECT p.id, p.title as title, p.body as body, p.user_id as owner_id FROM Post p where p.id=?;',[req.body.id],(error,result)=>{
            if (error){
                res.status(500).send('INTERNAL_ERROR');
            }else{
                const titleBody = [result[0].title, result[0].body, result[0].id,result[0].owner_id];
                executeSQL("SELECT COUNT(*) as num FROM Likes where post_id=?;",[req.body.id],(error,result)=>{
                    if (error){
                        res.status(500).send('INTERNAL_ERROR');
                    }else{
                        const likes = result[0].num;
                        executeSQL("SELECT COUNT(*) as num FROM Comment where post_id=?;",[req.body.id],(error,result)=>{
                            if (error){
                                res.status(500).send('INTERNAL_ERROR');
                            }else{
                                const comments = result[0].num;
                                let json = {
                                    id: titleBody[2],
                                    title: titleBody[0],
                                    body: titleBody[1],
                                    likes: likes,
                                    comments: comments,
                                    owner_id : titleBody[3]
                                }
                                if (req.headers.authorization){
                                    checkAuth(req.headers.authorization,(error,decoded)=>{
                                        if (error){
                                            res.status(403).send('SOMETHING_WRONG');
                                        }else{
                                            executeSQL('SELECT id FROM Likes where post_id=? and user_id=?;',[req.body.id,parseInt(decoded.id)],(error,result)=>{
                                                if (error){
                                                    res.status(500).send('INTERNAL_ERROR');
                                                }else{
                                                    if (result[0]){
                                                        json.liked = true;
                                                    }else{
                                                        json.liked=false;
                                                    }
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