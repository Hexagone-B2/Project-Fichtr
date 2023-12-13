const {checkAuth} = require("../../func/checkAuth");
const {nad} = require("../../func/notAllData");

module.exports.isAuthenticated = (req,res)=>{
    if (!(req.headers.authorization)){
        nad(res);
    }else{
        checkAuth(req.headers.authorization, (error,decoded)=>{
            if (error){
                res.status(403).send('NOT_AUTHENTICATED');
            }else{
                res.json({authenticated:true,user_id:decoded.id,username:decoded.username});
            }
        })
    }
}
