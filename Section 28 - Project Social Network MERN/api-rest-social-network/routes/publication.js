const express = require('express');
const router = express.Router();
const publicationController = require('../controllers/publication');
const auth = require('../middlewares/auth') ;

//* Routes
router.get('/publication', publicationController.publicationTest);
router.post('/save', auth.auth, publicationController.savePublication);
router.get('/detail/:id', auth.auth, publicationController.singlePublication);
router.delete('/remove/:id', auth.auth, publicationController.removePublication);
router.get('/user/:id/:page?', auth.auth, publicationController.listPublicationsSingleUser)

//* Export Router

module.exports = router;