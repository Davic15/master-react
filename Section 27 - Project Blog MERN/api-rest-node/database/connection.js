const mongoose = require('mongoose');

//* Method connection using mongoose.
const connection = async() => {
    try {
        /* 
            Extra parameters
            useNewUrlParse: true
            useUnifiedTopology: true
            useCreateIndex: true
        */
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb://0.0.0.0:27017/my_blog');
        console.log('Connected to the database my_blog');

    } catch (error) {
        console.log(error);
        throw new Error ('Cannot connect to the database my_blog');
    }
}

module.exports = {
    connection
}