const mongoose = require('mongoose');

const connection = async() => {
    try {
        await mongoose.connect('mongodb+srv://david:david150888@cluster0.c4d9j.mongodb.net/my_blog?retryWrites=true&w=majority');
        console.log('Connection with the database.')
    } catch (err) {
        console.log(err);
        throw new Error ('Error trying to connect to the database.')
    }
};

module.exports = {
    connection
};