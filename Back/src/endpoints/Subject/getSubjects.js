const {executeSQL} = require("../../func/mysql");
const {ite} = require("../../func/error");

module.exports.getSubjects = (req,res)=>{
    executeSQL("SELECT * FROM Subject;",(error,result)=>{
        if (error){
            ite(res);
        }else{
            res.json({list : result});
        }
    })
}