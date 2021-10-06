import express from 'express';
import * as usersDao from '../../db/dao/users-dao'
import mongoose from 'mongoose';


// const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const UNAUTHENTICATED = 401;
const HTTP_NO_CONTENT = 204;
const HTTP_BAD_REQUEST = 400;

const router = express.Router();

/**
 * A trick to include the check for a valid id in one place, rather than in every single method that needs it.
 * If "next()" is called, the next route below that matches will be called. Otherwise, we just end the response.
 * The "use()" function will match ALL HTTP request method types (i.e. GET, PUT, POST, DELETE, etc).
 */
router.use('/:id',async (req, res, next) => {
    const { id } = req.params;
    if (mongoose.isValidObjectId(id)) {
        next();
    }
    else {
        res.status(HTTP_BAD_REQUEST)
            .contentType('text/plain').send('Invalid ID');
    }
});




// Create New User
router.post('/', async (req, res) => {


    if (!req.body.username) {
        res.status(HTTP_BAD_REQUEST)
            .contentType('text/plain').send('New User must have a username');
        return;
    }
    if (!req.body.password) {
        res.status(HTTP_BAD_REQUEST)
            .contentType('text/plain').send('New User must have a password');
        return;
    }
    if (!req.body.firstName) {
        res.status(HTTP_BAD_REQUEST)
            .contentType('text/plain').send('New User must have a first name');
        return;
    }
    if (!req.body.secondName) {
        res.status(HTTP_BAD_REQUEST)
            .contentType('text/plain').send('New User must have a second name');
        return;
    }


    const tempUser= req.body;
    const newUser = await usersDao.createUser(tempUser);
    res.status(HTTP_CREATED)
        .header('location', `/api/users/${newUser._id}`)
        .json(newUser);
});



// Retrieve single user
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const user = await usersDao.retrieveUser(id);
    
    if (!user) {
        res.sendStatus(HTTP_NOT_FOUND);
        
    }else {
        res.json(user);
    }
});



// Update todo
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const user = {
        ...req.body,
        _id: id
    };
    const dbUser = await usersDao.retrieveUser(id);
    if(!dbUser){
        res.sendStatus(HTTP_NOT_FOUND)
    }else{
        await usersDao.updateUser(user);
        res.sendStatus(HTTP_NO_CONTENT)
    }
    
   
});



// Delete user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await usersDao.deleteUser(id);
    res.sendStatus( HTTP_NO_CONTENT );
   
})

export default router;