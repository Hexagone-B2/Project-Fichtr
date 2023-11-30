const {executeSQL} = require('../func/mysql');

module.exports.getProfile = (req,res) => {
    if (req.session.user){
        const id = req.session.user.id;
        executeSQL("SELECT * FROM Profile where user_id=?",[id],(error,result) => {
            if (result[0]){
                res.json(result[0]);
            }
            res.status(500).send('INTERNAL_ERROR');
        })
    }
}