const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//* Routes
router.get('/user', userController.userTest);
router.get('/register', userController.registerUser);

//* Export Router

module.exports = router;