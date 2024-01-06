const fs = require('fs');
const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad, ite} = require("../../func/error");
const path = require('path');

module.exports.updateProfilePic = (req, res) => {
    if (req.file && req.headers.authorization) {
        checkAuth(req.headers.authorization, (error, decoded) => {
            if (["image/jpeg","image/png"].includes(req.file.mimetype)) {
                if (req.file.size < 5000000) {
                    const splitedFilename = req.file.filename.split(".");
                    const ext = "." + splitedFilename[splitedFilename.length - 1]
                    fs.rename(req.file.path, path.resolve(__dirname + "/../../../public/profile_pic/" + decoded.id + ext), (error) => {
                        if (error) {
                            console.log(error);
                            ite(res);
                            fs.unlink(path.resolve(__dirname + "/../../" + req.file.path), () => {
                            });
                        } else {
                            executeSQL("UPDATE Profile set profile_pic=? where user_id=?", [decoded.id + ext, decoded.id], (error) => {
                                if (error) {
                                    console.log(error);
                                    ite(res);
                                    fs.unlink(path.resolve(__dirname + "/../../" + req.file.path), () => {
                                    });
                                } else {
                                    res.send('OK');
                                }
                            })
                        }
                    })
                } else {
                    res.status(403).send('FILE_TO_LARGE');
                    fs.unlink(path.resolve(__dirname + "/../../" + req.file.path), () => {
                    });
                }
            } else {
                res.status(403).send('UNACCEPTED_FILE');
                fs.unlink(path.resolve(__dirname + "/../../" + req.file.path), () => {
                });
            }
        })

    } else {
        nad(res);
        fs.unlink(path.resolve(__dirname + "/../../" + req.file.path), () => {
        });
    }
}