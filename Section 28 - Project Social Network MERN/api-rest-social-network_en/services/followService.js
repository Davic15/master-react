const Follow = require('../models/follow');

const followUserIds = async(identityUserId) => {
    try {
        //* Get Information about follows.
        let following = await Follow.find({'user': identityUserId}).select({'followed': 1, '_id': 0}).exec();

        let followers = await Follow.find({'followed': identityUserId}).select({'user': 1, '_id': 0}).exec();

        //* Proccess Id array
        let followingClean = [];
        following.forEach(follow => {
            followingClean.push(follow.followed);
        })

        let followersClean = [];
        followers.forEach(follow => {
            followersClean.push(follow.user)
        })

        return {
            following: followingClean,
            followers: followersClean
        }
    } catch (error) {
        return {};
    }
    
}

const followThisUser = async(identityUserId, profileUserId) => {
    //* Get Information about follows.
    let following = await Follow.findOne({'user': identityUserId, 'followed': profileUserId});

    let follower = await Follow.findOne({'user': profileUserId, 'followed': profileUserId});

    return {
        following: following,
        follower: follower
    }
}

module.exports = {
    followUserIds,
    followThisUser
}