const router = require('express').Router();
const multer = require('multer')
const storage = require('./func/multerStorage');

const upload = multer({storage: storage});

const {getProfilePic} = require('./endpoints/getProfilePic');
router.get("/getProfilePic", getProfilePic);

const {getPosts} = require('./endpoints/getPosts');
router.post("/getPosts", getPosts);

const {echo} = require('./endpoints/echo');
router.post('/echo', echo); router.get('/echo', echo);

const {hello} = require('./endpoints/hello');
router.get('/', hello);

const {updateProfilePic} = require('./endpoints/updateProfilePic');
router.post('/updateProfilePic', upload.single('file'), updateProfilePic)

const {register} = require('./endpoints/register');
router.post('/register', register)

const {login} = require('./endpoints/login');
router.post('/login', login)

const {updateUnameMailBio} = require('./endpoints/updateUnameMailBio');
router.post('/updateUnameMailBio', updateUnameMailBio)

const {getProfile} = require('./endpoints/getProfile');
router.post('/getProfile', getProfile);

const {getUnameMailBio} = require('./endpoints/getUnameMailBio');
router.post('/getUnameMailBio', getUnameMailBio)

const {getPostInfo} = require('./endpoints/getPostInfo');
router.post('/getPostInfo',getPostInfo);

const {modifyPassword} = require("./endpoints/modifyPassword");
router.post("/modifyPassword", modifyPassword);

const {getMyInfo} = require("./endpoints/getMyInfo");
router.post("/getMyInfo", getMyInfo);

const {like} = require("./endpoints/like")
router.post("/like", like);

const {unlike} = require("./endpoints/unlike")
router.post('/unlike',unlike)

const {createSubject} = require("./endpoints/createSubject");
router.post('/createSubject', createSubject)

const {getSubjects} = require("./endpoints/getSubjects");
router.post('/getSubjects', getSubjects)

const {deleteSubject} = require("./endpoints/deleteSubject");
router.post('/deleteSubject', deleteSubject)

const {isAuthenticated} = require("./endpoints/isAuthenticated");
router.post('/isAuthenticated', isAuthenticated)

const {getComments} = require("./endpoints/getComments");
router.post('/getComments', getComments)

const {comment} = require("./endpoints/comment");
router.post('/comment', comment)

const {likeComment} = require("./endpoints/likeComment");
router.post('/likeComment', likeComment)

const {getLikesCountComment} = require("./endpoints/getLikesCountComment");
router.post('/getLikesCountComment', getLikesCountComment)

module.exports = router;