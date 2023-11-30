const router = require('express').Router();
const multer = require('multer')

// Importation des endpoints
const {getFile} = require('./endpoints/getFile');
const {getPosts} = require('./endpoints/getPosts');
const {echo} = require('./endpoints/echo');
const {hello} = require('./endpoints/hello');
const {uploadProfilePic} = require('./endpoints/uploadProfilePic');
const {register} = require('./endpoints/register');
const {login} = require('./endpoints/login');
const {updateUnameMailBio} = require('./endpoints/updateUnameMailBio');
const {getProfile} = require('./endpoints/getProfile');
const {getUnameMailBio} = require('./endpoints/getUnameMailBio');

const storage = require('./func/multerStorage');


const upload = multer({storage: storage});

router.get("/file/:file", getFile);

router.get("/getPosts", getPosts);

router.post('/echo', echo);
router.get('/echo', echo);

router.get('/', hello);

router.post('/uploadProfilePic', upload.single('file'), uploadProfilePic)

router.post('/register', register)

router.post('/login', login)

router.post('/updateUnameMailBio',upload.single('newPhoto'), updateUnameMailBio)

router.post('/getProfile', getProfile);

router.post('/getUnameMailBio', getUnameMailBio)

module.exports = router;