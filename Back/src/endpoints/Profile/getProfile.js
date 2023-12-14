const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {ite} = require("../../func/error");

module.exports.getProfile = (req,res) => {
    if (req.headers.authorization) {
        checkAuth(req.headers.authorization, (error, decoded) => {
            executeSQL("SELECT profile_pic, bio, url_personnal_site, user_id FROM Profile where user_id=?", [parseInt(decoded.id)], (error, result) => {
                if (result[0]) {
                    res.json(result[0]);
                } else {
                    ite(res);
                }
            })
        })
    }
}