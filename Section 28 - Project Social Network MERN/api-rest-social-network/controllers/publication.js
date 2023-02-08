const fs = require('fs');
const path = require('path');
const Publication = require('../models/publication');
const followService = require('../services/followService');

/* ********************************************************************************************* */
//* Some actions
const publicationTest = (req, res) => {
    return res.status(200).send ({
        message: 'Message sent from: controllers/publication.js'
    })
}

/* ********************************************************************************************* */
/* 
    Save Publications.
    1) Get data from body.
    2) Check if they exist.
    3) Create and fill the object.
    4) Save object into the database.
    5) Return response.
*/
const savePublication = (req, res) => {
    //* 1) Get data from body.
    const params = req.body;

    //* 2) Check if they exist.
    if(!params.text) {
        return res.status(400).send({
            status: 'error',
            message: 'Save Publication found an error. Missing data.'
        });
    }

    //* 3) Create and fill the object.
    let newPublication = new Publication(params);
    newPublication.user = req.user.id;

    //* 4) Save object into the database.
    newPublication.save((error, publicationStored) => {
        if(error || ! publicationStored) {
            return res.status(400).send({
                status: 'error',
                message: 'Save Publication found an error. Publication did not save.'
            });
        }

        //* 5) Return response.
        return res.status(200).send({
            stautus: 'success',
            message: 'Save Publication successfully.',
            publicationStored
        })
    }) 
}

/* ********************************************************************************************* */
/* 
    Get a single publication.
    1) Get the publication ID.
    2) Find the publication ID.
    3) Return response.
*/
const singlePublication = (req, res) => {
    //* 1) Get the publication ID.
    const publicationId = req.params.id;

    //* 2) Find the publication ID.
    Publication.findById(publicationId, (error, publicationStored) => {
        if(error || ! publicationStored) {
            return res.status(404).send({
                status: 'error',
                message: 'Save Publication found an error. Publication not found.'
            });
        }
        //* 3) Return response.
        return res.status(200).send({
            stautus: 'success',
            message: 'Get single publication successfully.',
            publication: publicationStored
        })
    })
}

/* ********************************************************************************************* */
/* 
    Delete publications.
    1) Get the publication Id.
    2) Find and remove.
    3) Return response.
*/
const removePublication = (req, res) => {
    //* 1) Get the publication Id.
    const publicationId = req.params.id;
    
    //* 2) Find and remove.
    Publication.find({'user': req.user.id, '_id': publicationId}).remove(error => {
        if(error) {
            return res.status(500).send({
                status: 'error',
                message: 'Delete Publication found an error. Publication was not deleted.'
            });
        }
        //* 3) Return response.
        return res.status(200).send({
            stautus: 'success',
            message: 'Delete publication successfully.',
            publication: publicationId
        })
    })  
}

/* ********************************************************************************************* */
/* 
    List all publications of a single user.
    1) Get user Id.
    2) Check the page number.
    3) Find, Populate, sort and pagination.
    4) Return response.
*/
const listPublicationsSingleUser = (req, res) => {
    //* 1) Get user Id.
    const userId = req.params.id;

    //* 2) Check the page number.
    let page = 1;
    if(req.params.page) {
        page = req.params.page
    }

    //* 3) Find, Populate, sort and pagination
    const itemsPerPage = 5;
    Publication.find({'user': userId})
    .sort('-created_at')
    .populate('user', '-password -__v -role -email')
    .paginate(page, itemsPerPage, (error, publications, totalElements) => {
        if(error || !publications || publications.length <= 0) {
            return res.status(404).send({
                status: 'error',
                message: 'Delete Publication found an error. Publications not found.'
            });
        }

        //* 4) Return response.
        return res.status(200).send({
            stautus: 'success',
            message: 'List single user publications successfully.',
            page,
            totalElements,
            pages: Math.ceil(totalElements / itemsPerPage),
            publications
        })
    });
}

/* ********************************************************************************************* */
/* 
    Upload Image.
    1) Check if the file exists.
    2) Get file name.
    3) Get the extension.
    4) Delete file if the extension is not correct.
    5) Save the file.
    6) Return response.
*/
const uploadImage = (req, res) => {
    const publicationId = req.params.id;
    //* 1) Check if the file exists.
    if(!req.file) {
        return res.status(404).json({
            status: 'error',
            message: 'Upload image found an error. File does not exist.'
        });
    }

    //* 2) Get file name.
    let image = req.file.originalname;

    //* 3) Get the extension.
    const imageSplit = image.split('\.');
    const extension = imageSplit[1];

    //* 4) Delete file if the extension is not correct.
    if(extension != 'png' && extension != 'jpg' && extension != 'jpeg' && extension != 'gif') {
        const filePath = req.file.path;
        const fileDeleted = fs.unlinkSync(filePath);
        return res.status(400).send({
            status: 'error',
            message: 'Upload image found an error. Extension not valid.'
        })
    }

    //* 5) Save the file.
    Publication.findOneAndUpdate({ 'user': req.user.id, '_id': publicationId }, {file: req.file.filename}, {new: true}, (error, publicationUpdated) => {
        if(error || !publicationUpdated) {
            return res.status(500).json({
                status: 'error',
                message: 'Upload image found an error. Error uploading the image.'
            });
        }
        return res.status(200).send({
            status: 'success',
            message: 'Upload image done successfully.',
            publication: publicationUpdated,
            file: req.file
        }); 
    })
}

/* ********************************************************************************************* */
/* 
    Get Media
    1) Get params from the url.
    2) Write the path for the image.
    3) Check if the file exist.
    4) If so, return file.
*/
const media = (req, res) => {
    //* 1) Get params from the url.
    const file = req.params.file

    //* 2) Write the path for the image.
    const filePath = './uploads/publications/' + file;
    
    //* 3) Check if the file exist.
    fs.stat(filePath, (error, exist) => {
        if(!exist) {
            return res.status(404).send({
                status: 'error',
                message: 'Get media found an error. File not found.'
            });
        }
        return res.sendFile(path.resolve(filePath))
    });
}

/* ********************************************************************************************* */
/* 
    Feed
    1) Get current page.
    2) Name of elements per page.
    3) Get an array of Ids, of users I follow.
    4) Find publications (in) to get all publications, sort, populate and pagination.
*/
const feed = async(req, res) => {
    //* 1) Get current page.
    let page = 1;
    if(req.params.page) {
        page = req.params.page;
    }

    //* 2) Name of elements per page.
    let itemsPerPage = 5;

    //* 3) Get an array of Ids, of users I follow.
    try {
        const myFollows = await followService.followUserIds(req.user.id);

        //* 4) Find publications (in) to get all publications, sort, populate and pagination.
        const publications = Publication.find({'user': myFollows.following})
        .populate('user', '-password -role -__v -email')
        .sort('-created_at')
        .paginate(page, itemsPerPage, (error, publications, total) => {
            if(error || !publications) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Publication feed found an error. Publications not found.'
                })
            }
            return res.status(200).send({
                status: 'success',
                message: 'Publication feed called successfully.',
                following: myFollows.following,
                total,
                page,
                pages: Math.ceil(total / itemsPerPage),
                itemsPerPage,
                publications
            });
        })
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            message: 'Publication feed found an error. Cannot get publications.'
        })
    }

     
}

//* Export actions
module.exports = {
    savePublication,
    singlePublication,
    removePublication,
    listPublicationsSingleUser,
    uploadImage,
    media,
    feed,
    publicationTest
}