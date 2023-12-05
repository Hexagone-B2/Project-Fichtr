const router = require('express').Router();
const multer = require('multer')
const storage = require('./func/multerStorage');

// Importation des endpoints
const {getProfilePic} = require('./endpoints/getProfilePic');
const {getPosts} = require('./endpoints/getPosts');
const {echo} = require('./endpoints/echo');
const {hello} = require('./endpoints/hello');
const {updateProfilePic} = require('./endpoints/updateProfilePic');
const {register} = require('./endpoints/register');
const {login} = require('./endpoints/login');
const {updateUnameMailBio} = require('./endpoints/updateUnameMailBio');
const {getProfile} = require('./endpoints/getProfile');
const {getUnameMailBio} = require('./endpoints/getUnameMailBio');
const {getPostInfo} = require('./endpoints/getPostInfo');
const {modifyPassword} = require("./endpoints/modifyPassword");
const {getMyInfo} = require("./endpoints/getMyInfo");
const {like} = require("./endpoints/like")
const {unlike} = require("./endpoints/unlike")
const {createSubject} = require("./endpoints/createSubject");
const {getSubjects} = require("./endpoints/getSubjects");
const {deleteSubject} = require("./endpoints/deleteSubject");
const {isAuthenticated} = require("./endpoints/isAuthenticated");

const upload = multer({storage: storage});

router.get("/getProfilePic", getProfilePic);

router.get("/getPosts", getPosts);

router.post('/echo', echo);
router.get('/echo', echo);

router.get('/', hello);

router.post('/updateProfilePic', upload.single('file'), updateProfilePic)

router.post('/register', register)

router.post('/login', login)

router.post('/updateUnameMailBio', updateUnameMailBio)

router.post('/getProfile', getProfile);

router.post('/getUnameMailBio', getUnameMailBio)

router.post('/getPostInfo',getPostInfo);

router.post("/modifyPassword", modifyPassword);

router.post("/getMyInfo", getMyInfo);

router.post("/like", like);

router.post('/unlike',unlike)

router.post('/createSubject', createSubject)

router.post('/getSubjects', getSubjects)

router.post('/deleteSubject', deleteSubject)

router.post('/isAuthenticated', isAuthenticated)


module.exports = router;