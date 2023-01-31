const { connection } = require ('./database/connection');
const express = require ('express');
const cors = require('cors');

//* App started
console.log('App is running.');

//* Connection to the database
connection();

//* Create node server.
const app = express();
const port = 3900;

//* Setting cors middleware
app.use(cors());

//* Change body to JavaScript object.
//* Get data with content type app/json
app.use(express.json());
//* Get data with content type x-www-from-urlencoded
app.use(express.urlencoded({extended: true}))

//* Routes
const routeArticle = require('./routes/article');
//* Loading Routes
app.use('/api', routeArticle)

//* Create the server and listen HTTP requests.
app.listen(port, () => {
    console.log('The server is running on port ' + port);
});





