/*
    1) Import modules and dependencies.
    2) Import secret password.
    3) Auth Middleware.
    4) Check auth header.
    5) Decrypt the token.
    6) Add user data to the request.
    7) Execute.
*/

//* 1) Import modules and dependencies.
const jwt = require('jwt-simple');
const moment = require('moment');

//* 2) Import secret password.
const libjwt = require('../services/jwt');
const secret = libjwt.secret;

//* 3) Auth Middleware.
exports.auth = (req, res, next) => {
    //* 4) Check auth header.
    if(!req.headers.authorization) {
        return res.status(403).send({
            status: 'error',
            message: `The request doesn't have the authorization header.`
        })
    }
    //* 5) Decrypt the token.
    let token = req.headers.authorization.replace(/['"]+/g, '');
    try {
        let payload = jwt.decode(token, secret);
        if(payload.exp <= moment().unix()) {
            return res.status(401).send({
                status: 'error',
                message: `Expired Token.`
            }) 
        }
        //* 6) Add user data to the request.
        req.user = payload;

    } catch(error) {
        return res.status(404).send({
            status: 'error',
            message: `Invalid Token.`,
            error
        }) 
    }

    //* 7) Execute.
    next();
}
