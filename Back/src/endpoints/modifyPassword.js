const {hash} = require('bcrypt');
const {executeSQL} = require("../func/mysql");


/**
 * @param req
 * @param res
 * @param req.password
 * @param req.repeatPassword
 * @param req.repeatPassword
 * @param req.body
 */
module.exports.modifyPassword = (req, res) => {
    if (!(req.body.password && req.body.repeatPassword && req.body.id)) {
        res.status(403).send('NOT_ALL_DATA');
    } else {
        if (req.body.password === req.body.repeatPassword) {
            hash(req.body.password, 10).then(hashed => {
                executeSQL("UPDATE User SET password=? where id=?;", [hashed, req.body.id], (error) => {
                    if (error) {
                        res.status(500).send('INTERNAL_ERROR');
                    } else {
                        res.send('OK');
                    }
                })
            })
        }
    }
}