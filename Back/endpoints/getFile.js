const fs = require("fs");

module.exports.getFile = (req, res) => {
    let path = __dirname + "/public/" + req.params.file;
    if (fs.existsSync(path)) {
        res.sendFile(path);
    } else{
        path = __dirname + "/file-receive/" + req.params.file;
        if (fs.existsSync(path)){
            res.sendFile()
        }
        res.status(500).send('ERROR');
    }
}