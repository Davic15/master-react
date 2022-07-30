const express = require('express');
const router = express.Router();
const multer = require('multer');

const ArticleMiddleWare = require('../middleware/article');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/articles/')
    },

    filename: (req, file, cb) => {
        cb(null, 'article' + Date.now() + file.originalname)
    }
})

const uploads = multer({
    storage: storage
})

router.post('/create', ArticleMiddleWare.create);
router.get('/articles/:newest?', ArticleMiddleWare.list);
router.get('/article/:id', ArticleMiddleWare.one);
router.delete('/article/:id', ArticleMiddleWare.erase);
router.put('/article/:id', ArticleMiddleWare.edit);
router.post('/upload-image/:id', [uploads.single('file')], ArticleMiddleWare.upload);
router.get('/image/:file', ArticleMiddleWare.image);
router.get('/search/:search', ArticleMiddleWare.search);

module.exports = router;