const {checkAuth} = require("../../func/checkAuth");
const {nad} = require("../../func/notAllData");


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
        nad(res);
    }
}