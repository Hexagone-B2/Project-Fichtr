const {checkAuth} = require("../../func/checkAuth");

module.exports.isAuthenticated = (req,res)=>{
    if (!(req.headers.authorization)){
        res.status(403).send('NOT_ALL_DATA');
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
