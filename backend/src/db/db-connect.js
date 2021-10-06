import mongoose from 'mongoose';



/**
 * This function begins the process of connecting to the database, and returns a promise that will
 * resolve when the connection is established.
 */
export default function connectToDatabase(connectionString) {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true
    });
}