const express = require('express');
const multer = require('multer');
const router = express.Router();
const publicationController = require('../controllers/publication');
const auth = require('../middlewares/auth') ;

//* Upload files with multer (middleware)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, './uploads/publications/');
    },
    filename: (req, file, cb) => {
        cb (null, 'pub-' + Date.now() + '-' + file.originalname);
    }
});

//* Middleware
const uploads = multer({storage: storage})

//* Routes
router.get('/publication', publicationController.publicationTest);
router.post('/save', auth.auth, publicationController.savePublication);
router.get('/detail/:id', auth.auth, publicationController.singlePublication);
router.delete('/remove/:id', auth.auth, publicationController.removePublication);
router.get('/user/:id/:page?', auth.auth, publicationController.listPublicationsSingleUser);
router.post('/upload/:id', [auth.auth, uploads.single('file0')], publicationController.uploadImage);
router.get('/media/:file', publicationController.media);
router.get('/feed/:page?', auth.auth, publicationController.feed);

//* Export Router

module.exports = router;