import express from 'express';
import path from 'path';
import connectToDatabase from './db/db-connect';



const dotenv = require("dotenv")
dotenv.config()
// Setup Express
const app = express();
const port = process.env.PORT || 3001;


// Setup body-parser
app.use(express.json());

// Setup our routes.
import routes from './routes';
app.use('/',routes);

// Make the "public" folder available statically
app.use(express.static(path.join(__dirname, '../public')));



// Start the DB running. Then, once it's connected, start the server.
connectToDatabase(process.env.CONNECT_STRING)
    .then(() => app.listen(port, () => console.log(`App server listening on port ${port}!`)));