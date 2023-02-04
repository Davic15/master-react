const express = require('express');
const router = express.Router();
const publicationController = require('../controllers/publication');

//* Routes
router.get('/publication', publicationController.publicationTest);

//* Export Router

module.exports = router;