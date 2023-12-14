const fs = require('fs');
const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad, ite} = require("../../func/error");

module.exports.updateProfilePic = (req, res) => {
    if (req.file && req.headers.authorization) {
        checkAuth(req.headers.authorization, (error, decoded) => {
            if (["image/jpeg", "image/gif", "image/png"].includes(req.file.mimetype)) {
                if (req.file.size < 10000000) {
                    const splitedFilename = req.file.filename.split(".");
                    const ext = "." + splitedFilename[splitedFilename.length - 1]
                    fs.rename(__dirname + "/../../" + req.file.path, __dirname + "/../../public/profile_pic/" + decoded.id + ext, (error) => {
                        if (error) {
                            console.log(error);
                            ite(res);
                            fs.unlink(__dirname + "/../../" + req.file.path, () => {
                            });
                        } else {
                            executeSQL("UPDATE Profile set profile_pic=? where user_id=?", [decoded.id + ext, decoded.id], (error) => {
                                if (error) {
                                    console.log(error);
                                    ite(res);
                                    fs.unlink(__dirname + "/../../" + req.file.path, () => {
                                    });
                                } else {
                                    res.send('OK');
                                }
                            })
                        }
                    })
                } else {
                    res.status(403).send('FILE_TO_LARGE');
                    fs.unlink(__dirname + "/../../" + req.file.path, () => {
                    });
                }
            } else {
                res.status(403).send('UNACCEPTED_FILE');
                fs.unlink(__dirname + "/../../" + req.file.path, () => {
                });
            }
        })

    } else {
        nad(res);
        fs.unlink(__dirname + "/../../" + req.file.path, () => {
        });
    }
}