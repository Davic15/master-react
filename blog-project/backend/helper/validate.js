const validator = require('validator');

const validateArticle = (params) => {
    let validateTitle = !validator.isEmpty(params.title) && validator.isLength(params.title, {min: 5, max: undefined});
    let validateContent = !validator.isEmpty(params.content);
    if(!validateTitle || !validateContent) {
        throw new Error ('Validator shows error')
    }
}

module.exports = {
    validateArticle
}