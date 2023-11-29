const router = require('express').Router();
const multer = require('multer')
const {hello,
    sendFile,
    getPosts,
    echo,
    uploadProfilePic,
    register,
    login,
    updateUser
} = require('./component.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './file-receive/'); // Le dossier où les fichiers seront stockés
    }, filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nom du fichier
    },
});

const upload = multer({storage: storage});

router.get("/file/:file", sendFile);

router.get("/getPosts", getPosts);

router.post('/echo', echo)

router.get('/', hello);

router.post('/uploadProfilePic', upload.single('forer'), uploadProfilePic)

router.post('/register', register)

router.post('/login', login)

router.post('/updateUser',upload.single('newPhoto'), updateUser)

module.exports = router;