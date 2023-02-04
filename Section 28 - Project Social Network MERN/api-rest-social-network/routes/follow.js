const express = require('express');
const router = express.Router();
const followController = require('../controllers/follow');

//* Routes
router.get('/follow', followController.followTest);

//* Export Router

module.exports = router;