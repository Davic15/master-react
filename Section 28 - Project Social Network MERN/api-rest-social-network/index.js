/* 
    0) Import dependencies.
    1) Database Connection.
    2) Create node server.
    3) Add cors.
    4) Change data from the body to objects.
    5) Create routes.
    6) Let the server listen HTTP Requests.
*/

//* 0) Import dependencies.
const express = require('express');
const cors = require('cors');
const connection = require('./database/connection');
const userRoutes = require('./routes/user');
const publicationRoutes = require('./routes/publication');
const followRoutes = require('./routes/follow');


//* Welcome message.
console.log('Welcome to Social Network API REST.');

//* 1) Database Connection.
connection();

//* 2) Create node server.
const app = express();
const port = 3900;

//* 3) Add cors.
app.use(cors());

//* 4) Change data from the body to objects.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//* 5) Create routes.
app.use('/api/user', userRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/follow', followRoutes);

//* 6) Let the server listen HTTP Requests.
app.listen(port, () => {
    console.log('Server running on port: ', port);
})
