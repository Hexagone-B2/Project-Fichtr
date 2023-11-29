const router = require('express').Router();
const multer = require('multer')
const {hello,
    sendFile,
    getPosts,
    echo,
    uploadProfilePic,
    register,
    login,
    updateUserProfile,
    getProfile
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

router.post('/echo', echo);
router.get('/echo', echo);

router.get('/', hello);

router.post('/uploadProfilePic', upload.single('forer'), uploadProfilePic)

router.post('/register', register)

router.post('/login', login)

router.get('/test',(req,res) => {
    res.sendFile(__dirname+'/test.html');
})

router.post('/updateUser',upload.single('newPhoto'), updateUserProfile)

router.post('/getProfile',getProfile);

module.exports = router;