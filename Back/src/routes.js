const router = require('express').Router();
const multer = require('multer')
const storage = require('./func/multerStorage');

const upload = multer({storage: storage});

const {getProfilePic} = require('./endpoints/Profile/getProfilePic');
router.get("/getProfilePic", getProfilePic);

const {getPosts} = require('./endpoints/Post/getPosts');
router.post("/getPosts", getPosts);

const {echo} = require('./endpoints/Authentification/echo');
router.post('/echo', echo); router.get('/echo', echo);

const {hello} = require('./endpoints/Authentification/hello');
router.get('/', hello);

const {updateProfilePic} = require('./endpoints/Profile/updateProfilePic');
router.post('/updateProfilePic', upload.single('file'), updateProfilePic)

const {register} = require('./endpoints/Authentification/register');
router.post('/register', register)

const {login} = require('./endpoints/Authentification/login');
router.post('/login', login)

const {updateUnameMailBio} = require('./endpoints/Profile/updateUnameMailBio');
router.post('/updateUnameMailBio', updateUnameMailBio)

const {getProfile} = require('./endpoints/Profile/getProfile');
router.post('/getProfile', getProfile);

const {getUnameMailBio} = require('./endpoints/Profile/getUnameMailBio');
router.post('/getUnameMailBio', getUnameMailBio)

const {getPostInfo} = require('./endpoints/Post/getPostInfo');
router.post('/getPostInfo',getPostInfo);

const {modifyPassword} = require("./endpoints/Authentification/modifyPassword");
router.post("/modifyPassword", modifyPassword);

const {getMyInfo} = require("./endpoints/Profile/getMyInfo");
router.post("/getMyInfo", getMyInfo);

const {like} = require("./endpoints/Post/like")
router.post("/like", like);

const {unlike} = require("./endpoints/Post/unlike")
router.post('/unlike',unlike)

const {createSubject} = require("./endpoints/Subject/createSubject");
router.post('/createSubject', createSubject)

const {getSubjects} = require("./endpoints/Subject/getSubjects");
router.post('/getSubjects', getSubjects)

const {deleteSubject} = require("./endpoints/Subject/deleteSubject");
router.post('/deleteSubject', deleteSubject)

const {isAuthenticated} = require("./endpoints/Authentification/isAuthenticated");
router.post('/isAuthenticated', isAuthenticated)

const {getComments} = require("./endpoints/Comment/getComments");
router.post('/getComments', getComments)

const {comment} = require("./endpoints/Comment/comment");
router.post('/comment', comment)

const {likeComment} = require("./endpoints/Comment/likeComment");
router.post('/likeComment', likeComment)

const {unlikeComment} = require("./endpoints/Comment/unlikeComment");
router.post('/unlikeComment', unlikeComment)

const {getStats} = require("./endpoints/Stats/getStats");
router.post('/getStats', getStats)


module.exports = router;