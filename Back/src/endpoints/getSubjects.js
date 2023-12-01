const {executeSQL} = require("../func/mysql");
module.exports.getSubjects = (req,res)=>{
    executeSQL("SELECT * FROM Subject;",(error,result)=>{
        if (error){
            res.status(500).send('INTERNAL_ERROR');
        }else{
            res.json({list : result});
        }
    })
}