//* Some actions
const userTest = (req, res) => {
    return res.status(200).send ({
        message: 'Message sent from: controllers/user.js'
    })
}

//* Register a new user.
const registerUser = (req, res) => {
    /* 
        1) Get data from req.
        2) Validate (data exists).
        3) Validate duplicate user.
        4) Encrypt password.
        5) Save user.
    */
    return res.status(200).json({
        message: 'Register new user.'
    })
}

//* Export actions
module.exports = {
    userTest,
    registerUser
}