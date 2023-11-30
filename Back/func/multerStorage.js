module.exports = require('multer').diskStorage({
    destination: function (req, file, cb) {
        cb(null, './file-receive/'); // Le dossier où les fichiers seront stockés
    }, filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nom du fichier
    },
});

