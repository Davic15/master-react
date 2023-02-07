const mongoosePagination = require('mongoose-pagination');
const Follow = require('../models/follow');
const User = require('../models/user');

const followService = require('../services/followService');
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
    //* 1) Get user Id.
    let userId = req.user.id;

    //* 2) Check if the Id is inside the parameters.
    if (req.params.id) userId = req.params.id;

    //* 3) Check the page, otherwise page 1.
    let page = 1;
    if(req.params.page) page = req.params.page;

    //* 4) User per page.
    const itemsPerPage = 5;

    //* 5) Find, follow, and pagination.
    Follow.find({user: userId})
    .populate('user followed', '-password -role -__v')
    .paginate(page, itemsPerPage, async(error, follows, totalElements) => {
        //* 6) Array de Ids of user that I follow and following me.
        const followUserIds = await followService.followUserIds(req.user.id);
        return res.status(200).send ({
            status: 'success',
            message: 'List of users I am following.',
            follows,
            totalElements,
            pages: Math.ceil(totalElements / itemsPerPage),
            user_following: followUserIds.following,
            user_follow_me: followUserIds.followers
        });
    })
}

/* ********************************************************************************************* */
/* 
    List of users that are following me.
*/
const userFollowers = (req, res) => {
    //* 1) Get user Id.
    let userId = req.user.id;

    //* 2) Check if the Id is inside the parameters.
    if (req.params.id) userId = req.params.id;

    //* 3) Check the page, otherwise page 1.
    let page = 1;
    if(req.params.page) page = req.params.page;

    //* 4) User per page.
    const itemsPerPage = 5;
    
    //* 5) Find, follow, and pagination.
    Follow.find({followed: userId})
    .populate('user', '-password -role -__v')
    .paginate(page, itemsPerPage, async(error, follows, totalElements) => {

        //* 6) Array de Ids of user that I follow and following me.
        const followUserIds = await followService.followUserIds(req.user.id);
        return res.status(200).send ({
            status: 'success',
            message: 'List of users that followed me.',
            follows,
            totalElements,
            pages: Math.ceil(totalElements / itemsPerPage),
            user_following: followUserIds.following,
            user_follow_me: followUserIds.followers
        });
    })

    //* 4) User per page.
    /*const itemsPerPage = 5;
    return res.status(200).send ({
        status: 'success',
        message: 'List of users I am following.'
    });*/
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
