const express = require('express');
const multer = require('multer');
const router = express.Router();
const userController = require('../controllers/user');
const auth = require('../middlewares/auth');

//* Upload files with multer (middleware)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, './uploads/avatars/');
    },
    filename: (req, file, cb) => {
        cb (null, 'avatar-' + Date.now() + '-' + file.originalname);
    }
});

//* Middleware
const uploads = multer({storage: storage})

//* Routes
router.get('/try', auth.auth, userController.userTest);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile/:id', auth.auth, userController.getProfileUser);
router.get('/list/:page?', auth.auth, userController.listUser);
router.put('/update', auth.auth, userController.updateUser);
router.post('/upload', [auth.auth, uploads.single('file0')], userController.uploadImage);
router.get('/avatar/:file', userController.avatar);
router.get('/counters/:id', auth.auth, userController.counters);

//* Export Router

module.exports = router;