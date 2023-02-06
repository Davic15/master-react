//* Import dependencies and modules
const bcrypt = require('bcrypt');
const mongoosePagination = require('mongoose-pagination');
const fs = require('fs');
const path = require('path');
//* Import models
const User = require('../models/user');
const jwt = require('../services/jwt');

/* ********************************************************************************************* */
/* 
    Register a new User.
    1) Get data from req.
    2) Validate (data exists).
    3) Create user object and Validate duplicate user.
    4) Encrypt password.
    5) Save user.
*/
const registerUser = (req, res) => {
   //* 1) Get data from req.
    const params = req.body;

    //* 2) Validate (data exists).
    if(!params.name || !params.email || !params.password || !params.nick) {
        return res.status(400).json({
            status: 'error',
            message: 'Register new user found an error. Missing data.',
        });
    } 

    //* 3) Create user object and Validate duplicate user.
    User.find({ $or: [
        { email: params.email.toLowerCase() },
        { nick: params.nick.toLowerCase() }
    ]}).exec(async(error, users) => {
        if(error) {
            return res.status(500).json({
                status: 'error',
                message: 'Register new user found an error. Cannot connect to the Database.'
            });
        }
        if(users && users.length >= 1) {
            return res.status(200).json({
                status: 'success',
                message: 'Register new user found an error. User already exists in the Database.'
            });
        }

        //* 4) Encrypt password.
        let hashToSave = await bcrypt.hash(params.password, 10);
        params.password = hashToSave;

        params.email = params.email.toLowerCase();
        params.nick = params.nick.toLowerCase();

        //* Create user Object
        const userToSave = new User (params);

        userToSave.save((error, userCreated) => {
            if(error || !userCreated) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Register new user found an error. Error trying to save the new user.'
                });
            }
            
            //* 5) Save user.
            return res.status(200).json({
                status: 'success',
                message: 'Registered new user successfully.',
                user: userCreated
            });
        }); 
    });
}


/* ********************************************************************************************* */
/* 
    Login user
    1) Get data from body.
    2) Search in the database that user (email).
    3) If is exist check password.
    4) Return Token.
    5) Return user data.
*/
const loginUser = (req, res) => {
    //* 1) Get data from body.
    const params = req.body;
    if(!params.email || !params.password) {
        return res.status(400).send({
            status: 'error',
            message: 'Login user found an error. Missing data.'
        });
    }
    //* 2) Search in the database that user (email).
    User.findOne({email: params.email})
        //.select({'password': 0})
        .exec((error, user) => {
        if(error || !user) {
            return res.status(404).send({
                status: 'error',
                message: 'Login user found an error. User not found.'
            });
        }

        //* 3) If is exist check password.
        const pwd = bcrypt.compareSync(params.password, user.password);
        if (!pwd) {
            return res.status(404).send({
                status: 'error',
                message: 'Login user found an error. Login credentials are wrong.'
            });
        }

        //* 4) Return Token
        const token = jwt.createToken(user);

        //* 5) Return user data.

        return res.status(200).send({
            status: 'success',
            message: 'Login done successfully.',
            user: {
                id: user._id,
                name: user.name,
                nick: user.nick
            },
            token
        })
    })   
}

/* ********************************************************************************************* */
/* 
    Get Profile User
    1) Get id as a param.
    2) Query to get user data.
    3) Return result.
*/
const getProfileUser = (req, res) => {
    //* 1) Get id as a param.
    const id = req.params.id;

    //* 2) Query to get user data.
    User.findById(id)
    .select({password: 0, role: 0})
    .exec((error, userProfile) => {
        if(error || !userProfile) {
            return res.status(404).send({
                status: 'error',
                message: 'Get profile user found an error. User does not exist or there is an error.'
            });
        };

        //* 3) Return result.
        //* Later return follow information
        return res.status(200).send({
            status: 'success',
            message: 'Get profile user done successfully',
            user: userProfile
        });
    });
};

/* ********************************************************************************************* */
/* 
    List User (pagination)
    1) Check the current page.
    2) Query with mongoose paginate.
    3) Return results.
*/
const listUser = (req, res) => {
    //* 1) Check the current page.
    let page = 1;
    if(req.params.page) {
        page = req.params.page;
    }
    page = parseInt(page);

    //* 2) Query with mongoose paginate.
    let itemsPerPage = 5;
    User.find().sort('_id').paginate(page, itemsPerPage, (error, users, total) => {
        if(error || !users) {
            return res.status(404).send({
                status: 'erro',
                message: 'List users found an error. Query error and/or not users to display.',
                error
            });
        }

        //* 3) Return results.
        return res.status(200).send({
            status: 'success',
            message: 'List users done successfully.',
            users,
            page,
            itemsPerPage,
            total,
            pages: Math.ceil(total / itemsPerPage)
        });
    })
}

/* ********************************************************************************************* */
/* 
    Update user
    1) Get information.
    2) Check if user exists.
    3) Encrypt password.
    4) Find and Update.
*/
const updateUser = (req, res) => {
    //* 1) Get information.
    let userIdentity = req.user;
    let userToUpdate = req.body;
    delete userToUpdate.iat;
    delete userToUpdate.exp;
    delete userToUpdate.role;
    delete userToUpdate.image;

    //* 2) Check if user exists.
    User.find({ $or: [
        { email: userToUpdate.email.toLowerCase() },
        { nick: userToUpdate.nick.toLowerCase() }
    ]}).exec(async(error, users) => {
        if(error) {
            return res.status(500).json({
                status: 'error',
                message: 'Update user found an error. Cannot connect to the Database.'
            });
        }
        let userIsSet = false;
        users.forEach(user => {
            if(user && user._id != userIdentity.id) userIsSet = true
        })
        if(userIsSet) {
            return res.status(200).json({
                status: 'success',
                message: 'Update user found an error. User already exists in the Database.'
            });
        }

        //* 3) Encrypt password.
        if(userToUpdate.password) {
            let hashToSave = await bcrypt.hash(userToUpdate.password, 10);
            userToUpdate.password = hashToSave;
        }
        userToUpdate.email = userToUpdate.email.toLowerCase();
        userToUpdate.nick = userToUpdate.nick.toLowerCase();

        //* 4) Find and Update.
        try {
            let userUpdated = await User.findByIdAndUpdate({_id: userIdentity.id}, userToUpdate, {new: true});
            if(!userUpdated) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Update user found an error. Cannot connect to the Database.'
                });
            }
            return res.status(200).send({
                status: 'success',
                message: 'Update user.',
                user: userUpdated
            }); 
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Update user found an error. Error updating the user.'
            });
        }
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
    User.findOneAndUpdate({_id: req.user.id}, {image: req.file.filename}, {new: true}, (error, userUpdated) => {
        if(error || !userUpdated) {
            return res.status(500).json({
                status: 'error',
                message: 'Upload image found an error. Error uploading the image.'
            });
        }
        return res.status(200).send({
            status: 'success',
            message: 'Upload image done successfully.',
            user: userUpdated,
            file: req.file
        }); 
    })
}

/* ********************************************************************************************* */
/* 
    Get Avatar
    1) Get params from the url.
    2) Write the path for the image.
    3) Check if the file exist.
    4) If so, return file.
*/
const avatar = (req, res) => {
    //* 1) Get params from the url.
    const file = req.params.file

    //* 2) Write the path for the image.
    const filePath = './uploads/avatars/' + file;
    
    //* 3) Check if the file exist.
    fs.stat(filePath, (error, exist) => {
        if(!exist) {
            return res.status(404).send({
                status: 'error',
                message: 'Get avatar found an error. File not found.'
            });
        }
        return res.sendFile(path.resolve(filePath))
    });
}

/* ********************************************************************************************* */

const userTest = (req, res) => {
    return res.status(200).send({
        status: 'success',
        message: 'Middleware Ok.',
        user: req.user
    })
}


//* Export actions
module.exports = {
    registerUser,
    loginUser,
    getProfileUser,
    listUser,
    updateUser,
    uploadImage,
    avatar,
    userTest
}