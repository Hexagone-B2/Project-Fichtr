const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {executeSQL} = require("../../func/mysql");
const {SECRET_KEY} = require('../../func/secret_key')
const {nad} = require("../../func/error");

module.exports.login = (req, res) => {
    if (!(req.body.mail && req.body.password)){
        nad(res)
    }else{
        executeSQL('SELECT * from User where mail=?', [req.body.mail], (error, result) => {
            if (!result[0]) {
                res.status(403).send('UNKNOWN_MAIL');
            }else{
                if (bcrypt.compareSync(req.body.password, result[0].password)) {
                    const token = jwt.sign({
                        id: result[0].id,
                        username:result[0].username,
                        firstname: result[0].firstname,
                        lastname: result[0].lastname,
                        mail: result[0].mail,
                        roles: result[0].roles,
                    }, SECRET_KEY, {expiresIn: 60 * 60});
                    res.send(token);
                } else {
                    res.status(403).send('WRONG_PASSWORD');
                }
            }
        })
    }
}