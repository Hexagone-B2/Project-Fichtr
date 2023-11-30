const {executeSQL} = require('../func/mysql');

module.exports.getPosts = (req, res) => {
    executeSQL("SELECT * FROM Post", [], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('INTERNAL_ERROR');
        } else {
            res.json(results)
        }
    })
}