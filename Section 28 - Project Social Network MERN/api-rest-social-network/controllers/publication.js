const Publication = require('../models/publication');
//* Some actions
const publicationTest = (req, res) => {
    return res.status(200).send ({
        message: 'Message sent from: controllers/publication.js'
    })
}

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
    .populate('user', '-password -__v -role')
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
            publications,
            
        })
    })

    
}

/* 
    List all publications (FEED).
*/

/* 
    Upload files.
*/

/* 
    Return files.
*/

//* Export actions
module.exports = {
    savePublication,
    singlePublication,
    removePublication,
    listPublicationsSingleUser,
    publicationTest
}