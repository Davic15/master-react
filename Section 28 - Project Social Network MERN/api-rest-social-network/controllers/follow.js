const Follow = require('../models/follow');
const User = require('../models/user');
//* Some actions

/* ********************************************************************************************* */
/* 
    Save a follow (follow user).
    1) Get data from body.
    2) Get user Id.
    3) Create an object with follow model.
    4) Save and return.
*/
const saveFollow = (req, res) => {
    //* 1) Get data from body.
    const params = req.body;

    //* 2) Get user Id.
    const identity = req.user;
    //* 3) Create an object with follow model.
    let userToFollow = new Follow({
        user: identity.id,
        followed: params.followed
    });

    //* 4) Save and return.
    userToFollow.save((error, followStored) => {
        if(error || !followStored) {
            return res.status(500).send ({
                status: 'error',
                message: 'Save follow found an error. User cannot be followed.'
            })
        }
        return res.status(200).send ({
            status: 'success',
            message: 'Save follow successfully.',
            follow: followStored
        });
    });
}

/* ********************************************************************************************* */
/* 
    Delete a follow (unfollow user).
    1) Get the id (user logged in).
    2) Get the id (followed user).
    3) Find and remove.
*/
const saveUnfollow = (req, res) => {
    //* 1) Get the id (user logged in).
    const userId = req.user.id;

    //* 2) Get the id (followed user).
    const followedId = req.params.id;

    //* 3) Find and remove.
    Follow.find({
        'user': userId,
        'followed': followedId
    }).remove((error, followDeleted) => {
        if(error || !followDeleted) {
            return res.status(500).send ({
                status: 'error',
                message: 'Save unfollow found an error. User cannot be unfollowed.'
            });
        }
        return res.status(200).send ({
            status: 'success',
            message: 'Save unfollow successfully.'
        });
    });
}

/* ********************************************************************************************* */
/* 
    List of users that any user is following.
    1) Get user Id.
    2) Check if the Id is inside the parameters.
    3) Check the page, otherwise page 1.
    4) User per page.
    5) Find, follow, and pagination.
    6) Array de Ids of user that I follow and following me.
*/
const userFollowing = (req, res) => {
    return res.status(200).send ({
        status: 'success',
        message: 'List of users I am following.'
    });
}

/* ********************************************************************************************* */
/* 
    List of users that are following me.
*/
const userFollowers = (req, res) => {
    return res.status(200).send ({
        status: 'success',
        message: 'List of users I am following.'
    });
}

/* ********************************************************************************************* */
/* 
    Test
*/

const followTest = (req, res) => {
    return res.status(200).send ({
        message: 'Message sent from: controllers/follow.js'
    })
}

//* Export actions
module.exports = {
    saveFollow,
    saveUnfollow,
    userFollowing,
    userFollowers,
    followTest
}
