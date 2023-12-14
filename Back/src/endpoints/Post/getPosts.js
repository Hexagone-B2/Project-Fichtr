const {executeSQL} = require("../../func/mysql");
const {nad, ite} = require("../../func/error");

module.exports.getPosts = (req, res) => {
    if (req.body.hasOwnProperty('nb')){
        executeSQL("SELECT id FROM Post ORDER BY ID LIMIT ?,? ;", [req.body.nb*5,5], (error, results) => {
            if (error) {
                console.log(error);
                ite(res);
            } else {
                res.json({tab: results.map(element => element.id)})
            }
        })
    }else{
        nad(res)
    }
}