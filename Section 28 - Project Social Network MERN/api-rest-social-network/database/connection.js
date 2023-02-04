const moongose = require ('mongoose');

const connection = async() => {
    try {
        await moongose.connect('mongodb://0.0.0.0:27017/my_socialnetwork');
        console.log('Connection with the Database stablished.');
    } catch (error) {
        console.log(error);
        throw new Error ('Connection with Database failed.');
    }
}

module.exports = connection;