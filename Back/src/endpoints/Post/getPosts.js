const {executeSQL} = require("../../func/mysql");

module.exports.getPosts = (req, res) => {
    if (req.body.hasOwnProperty('nb')){
        executeSQL("SELECT id FROM Post ORDER BY ID LIMIT ?,? ;", [req.body.nb*5,5], (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send('INTERNAL_ERROR');
            } else {
                let send=[];
                results.forEach(element=>send.push(element.id));
                res.json({tab:send})
            }
        })
    }else{
        res.status(403).send('NOT_ALL_DATA');
    }
}