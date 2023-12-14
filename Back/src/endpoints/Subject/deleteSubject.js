const {checkAuth} = require("../../func/checkAuth");
const {executeSQL} = require("../../func/mysql");
const {nad, ite} = require("../../func/error");

module.exports.deleteSubject = (req,res)=>{
    if (req.headers.authorization && req.body.id){
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                res.status(403).send('SOMETHING_WRONG');
            }else if (decoded.roles === 'admin'){
                executeSQL('DELETE FROM Post WHERE subject_id=?;',[parseInt(req.body.id)],(error)=>{
                    if (error){
                        ite(res);
                    }else{
                        executeSQL("DELETE FROM Subject WHERE id=?;",[parseInt(req.body.id)],(error)=>{
                            if (error){
                                ite(res);
                            }else{
                                res.send('OK');
                            }
                        })
                    }
                })
            }else{
                res.status(403).send('NOT_AN_ADMIN')
            }
        })
    }else{
        nad(res);
    }
}