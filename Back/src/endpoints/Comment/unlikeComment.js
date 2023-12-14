const {checkAuth} = require("../../func/checkAuth");
const {executeSQL} = require("../../func/mysql");
const {nad, ite} = require("../../func/error");

module.exports.unlikeComment = (req, res) => {
    if (req.body.comment_id && req.headers.authorization) {
        checkAuth(req.headers.authorization, (error, decoded) => {
            if (error) {
                res.status(403).send('INVALID_TOKEN_OR_EXPIRED');
            } else {
                executeSQL('DELETE FROM LikesComment WHERE comment_id=? and user_id=?;', [req.body.comment_id, decoded.id], (error) => {
                    if (error) {
                        ite(res);
                    } else {
                        res.send('OK');
                    }
                })
            }
        })
    } else {
        nad(res);
    }
}