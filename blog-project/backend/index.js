const { connection } = require('./database/connection');
const express = require('express');
const cors = require('cors')
const routesArticle = require('./routes/article');

//* Running app
console.log('App runing')

//* Connect to the database
connection();

//* Node Server
const app = express();
const port = 3900

//* Cors
app.use(cors());

//* Convert body to JS object
//* get data with the type content-type app/json
app.use(express.json());
//* form-urlencoded
app.use(express.urlencoded({extended: true}));

//* Create routes
app.use('/api', routesArticle)

//* Create server and listen http request
app.listen(port, () => {
    console.log('Server running on port: ' + port)
});