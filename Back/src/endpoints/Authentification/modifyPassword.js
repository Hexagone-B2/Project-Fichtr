const {hash} = require('bcrypt');
const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad, ite} = require("../../func/error");


/**
 * @param req
 * @param res
 * @param req.password
 * @param req.repeatPassword
 * @param req.repeatPassword
 * @param req.body
 */
module.exports.modifyPassword = (req, res) => {
    if (!(req.body.password && req.body.repeatPassword && req.headers.authorization)) {
        nad(res);
    } else {
        checkAuth(req.headers.authorization,(error,decoded)=>{
            if (req.body.password === req.body.repeatPassword) {
                hash(req.body.password, 10).then(hashed => {
                    executeSQL("UPDATE User SET password=? where id=?;", [hashed, decoded.id], (error) => {
                        if (error) {
                            ite(res);
                        } else {
                            res.send('OK');
                        }
                    })
                })
            }
        })

    }
}