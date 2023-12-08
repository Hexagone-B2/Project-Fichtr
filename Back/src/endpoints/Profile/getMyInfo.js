const {checkAuth} = require("../../func/checkAuth");


module.exports.getMyInfo = (req,res) => {
    if (req.headers.authorization){
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (error){
                console.log(error);
                res.status(403).send('SOMETHING_WRONG');
            }else{
                res.json(decoded);
            }
        })
    }else{
        res.status(403).send('NOT_ALL_DATA');
    }
}