const Article = require('../models/Article');
const fs = require('fs');
const path = require('path')
const {validateArticle} = require('../helper/validate');
const test = (req, res) => {
    return res.status(200).json({
        msg: 'Test done in Article'
    })
}

const create = (req, res) => {
    //* Get data from the user
    let params = req.body
    //* Validate date
    try {
        validateArticle(params)
    } catch (err) {
        return res.status(404).json({
            status: 'Error',
            msg: 'Error getting data. No articles found.'
        })
    }
    //* Create the object to save
    const article = new Article(params)
    //* Assign values

    //* Save articles in the database
    article.save((error, articleSaved) => {
        if(error || !articleSaved) {
            return res.status(400).json({
                status: 'Error',
                msg: 'Error saving data'
            })
        }
        //* return result
        return res.status(200).json({
            status: 'Success',
            article: articleSaved,
            msg: 'Article saved correctly'
        })
    });
}

const list = (req, res) => {
    let query = Article.find({})
                        .limit(req.params.newest && 3)
                        .sort({date: -1})
                        .exec((error, article) => {
        if(error || !article) {
            return res.status(404).json({
                status: 'Error',
                msg: 'Error getting data. No articles found.'
            })
        }
        return res.status(200).json({
            status: 'Success',
            article: article
        })
    });
}

const one = (req, res) => {
    // get the id using the url
    let id = req.params.id;
    // get the article
    Article.findById(id, (error, article) => {

        if(error || !article) {
            return res.status(404).json({
                status: 'Error',
                msg: 'Error getting data. No articles found.'
            })
        }
        return res.status(200).json({
            status: 'Success Found an article',
            article: article
        })
    })
}

const erase = (req, res) => {
    let id = req.params.id;
    Article.findOneAndDelete({_id: id}, (error, article) => {
        if(error || !article) {
            return res.status(404).json({
                status: 'Error',
                msg: 'Error getting data. No articles found.'
            })
        }
        return res.status(200).json({
            status: 'Success Delete',
            article: article
        })
    })
}



const edit = (req, res) => {
    let id = req.params.id;
    let params = req.body;

    try {
        validateArticle(params)
    } catch (err) {
        return res.status(404).json({
            status: 'Error',
            msg: 'Error getting data. No articles found.'
        })
    }

    Article.findOneAndUpdate({_id: id}, params, {new: true}, (error, article) => {
        if(error || !article) {
            return res.status(404).json({
                status: 'Error',
                msg: 'Error getting data. No articles found.'
            })
        }
        return res.status(200).json({
            status: 'Success Update',
            article: article
        })
    })
}

const upload = (req, res) => {
    //* set multer

    //* get the file
    if(!req.file && !req.files) {
        return res.status(400).json({
            status: 'Error',
            msg: "Wrong request"
        })
    }

    //* file name
    let fileName = req.file.originalname;
    //* file extension
    let fileSplit = fileName.split('\.');
    let extension = fileSplit[1];
    // check the correct extension
    if(extension != 'png' && extension != 'jpg' && extension != 'jpeg' && extension != 'gif') {
        //delete file and response
        fs.unlink(req.file.path,(error) => {
            return res.status(400).json({
                status: 'Error',
                msg: "Invalid file/extension"
            })
        });
    } else {

        let id = req.params.id;

        Article.findOneAndUpdate({_id: id}, {image: req.file.filename}, {new: true}, (error, article) => {
            if(error || !article) {
                return res.status(404).json({
                    status: 'Error',
                    msg: 'Error getting data. No articles found.'
                })
            }
            return res.status(200).json({
                status: 'Success Update',
                article: article,
                file: req.file
            })
        })
    }
}

const image = (req, res) => {
    let file = req.params.file;
    let pathOnDisk = './images/articles/'+file;
    fs.stat(pathOnDisk, (error, exists) => {
        if(exists) {
            return res.sendFile(path.resolve(pathOnDisk))
        } else {
            return res.status(404).json({
                status: 'Error',
                msg: 'No image found.',
                exists,
                file,
                pathOnDisk
            })
        }
    });
}

const search = (req, res) => {
    //get the search string
    let search = req.params.search;
    //find or
    Article.find({
        '$or': [
            {'title': { '$regex': search, '$options': 'i'}},
            {'content': { '$regex': search, '$options': 'i'}},
        ]
    }).sort({date: -1})
    .exec((error, article) => {
        if(error || !article || article.length <= 0) {
            return res.status(404).json({
                status: 'Error',
                msg: 'Error getting data. No articles found.'
            })
        }
        return res.status(200).json({
            status: 'Search Success',
            article: article
        })

    })
}

module.exports = {
    test,
    create,
    list, 
    one,
    erase,
    edit, 
    upload,
    image,
    search
}