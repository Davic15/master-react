//* Import dependencies and modules
const bcrypt = require('bcrypt');
const mongoosePagination = require('mongoose-pagination')
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
    userTest
}