const express = require('express');
const router = express.Router();
const followController = require('../controllers/follow');
const auth = require('../middlewares/auth');

//* Routes
router.get('/follow', followController.followTest);
router.post('/save', auth.auth, followController.saveFollow);
router.delete('/unfollow/:id', auth.auth, followController.saveUnfollow);
router.get('/following/:id?/:page?', auth.auth, followController.userFollowing);
router.get('/followers/:id?/:page?', auth.auth, followController.userFollowers);
//* Export Router

module.exports = router;