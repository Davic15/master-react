/* 
    1) Import dependencies.
    2) Secret password.
    3) Create a method to generate tokens.
    4) Return the jwt token.
*/

//* 1) Import dependencies.
const jwt = require('jwt-simple');
const moment = require('moment');

//* 2) Secret password.
const secret = 'SECRET_PASSWORD_project_SOCIAL_NETWORK';

//* 3) Create a method to generate tokens.
const createToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    //* 4) Return the jwt token.
    return jwt.encode(payload, secret);
}

module.exports = {
    secret,
    createToken
}