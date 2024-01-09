module.exports = require('multer').diskStorage({
    destination: function (req, file, cb) {
        cb(null, require('path').resolve(__dirname, "../../", "public/profile_pic"));
    }, filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

