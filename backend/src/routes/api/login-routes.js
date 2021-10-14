import express from 'express';
import * as usersDao from '../../db/dao/users-dao'


/**
 * 
 * @author Zach Wang
 */



var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const router = express.Router();
const HTTP_BAD_REQUEST = 400;



/**
 * Login API
 */
router.post('/', async (req, res) => {


    if (!req.body.email) {
        res.status(HTTP_BAD_REQUEST)
            .contentType('text/plain').send('Must have a email!');
        return;
    }
    if (!req.body.password) {
        res.status(HTTP_BAD_REQUEST)
            .contentType('text/plain').send('Must hava a password');
        return;
    }

    try {
        const { email, password } = req.body;
        var user = await usersDao.retrieveUserByEmail(req.body.email)

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "12h",
                }
            );
            const returnPaylod = {
                user:user,
                token:token
            }

            // return user and token
            res.status(200).json(returnPaylod);
        } else {
            res.status(400).send("Invalid Credentials");

        }
    } catch (err) {
        console.log(err)
    }
});



export default router;