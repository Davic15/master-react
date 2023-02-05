const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const auth = require('../middlewares/auth');

//* Routes
router.get('/try', auth.auth, userController.userTest);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile/:id', auth.auth, userController.getProfileUser);
router.get('/list/:page?', auth.auth, userController.listUser);

//* Export Router

module.exports = router;