const express = require('express');
const multer = require('multer');

const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/articles/');
    },

    filename: (req, file, cb) => {
        cb(null, 'article' + Date.now() + file.originalname);
    }
});

const uploads = multer({storage: storage});

const ArticleController = require('../control/article');

//* Working Routes
router.post('/create', ArticleController.createArticle);
//* optional parameter
router.get('/articles/:latest?', ArticleController.getArticles);
//* non optional parameter
router.get('/article/:id', ArticleController.getArticle);
router.delete('/article/:id', ArticleController.deleteArticle);
router.put('/article/:id', ArticleController.updateArticle);
router.post('/upload-image/:id', [uploads.single('file')], ArticleController.uploadImage);
router.get('/image/:file', ArticleController.images);
router.get('/search/:search', ArticleController.searchArticle);







module.exports = router;