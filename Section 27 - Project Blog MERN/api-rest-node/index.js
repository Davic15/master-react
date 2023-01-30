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
app.use(express.json());

//* Create Routes
app.get('/try', (req, res) => {
    console.log('Endpoint executed.')
    //* send = returns a generic HTML
    /*return res.status(200).send(`
        <h1>
            Response
        </h1>
    `)*/
    //* send = returns an object
    //* json = we can return them in this way.
    return res.status(200).json({
        course: 'React',
        name: 'David'
    })
});

app.get('/', (req, res) => {
    console.log('Endpoint executed.')
    //* send = returns a generic HTML
    /*return res.status(200).send(`
        <h1>
            Response
        </h1>
    `)*/
    //* send = returns an object
    //* json = we can return them in this way.
    return res.status(200).send(`
        <h1>Home</h1>
    `)
});

//* Create the server and listen HTTP requests.
app.listen(port, () => {
    console.log('The server is running on port ' + port);
});