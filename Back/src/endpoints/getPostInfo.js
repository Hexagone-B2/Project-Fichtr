const {executeSQL} = require('../func/mysql.js');

/**
 * @jso @result[] num
 */
module.exports.getPostInfo = (req,res)=>{
    if (!(req.body.id)){
        res.status(403).send('NOT_ALL_DATA');
    }else{
        executeSQL('SELECT p.title as title, p.body as body FROM Post p where p.id=?;',[req.body.id],(error,result)=>{
            if (error){
                res.status(500).send('INTERNAL_ERROR');
            }else{
                const titleBody = [result[0].title, result[0].body];
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
                                res.json({
                                    title: titleBody[0],
                                    body: titleBody[1],
                                    likes: likes,
                                    comments: comments
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}