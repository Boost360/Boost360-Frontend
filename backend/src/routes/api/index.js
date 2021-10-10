import express from 'express';

const router = express.Router();

import users from './user-routes';
import login from './login-routes';



router.use('/users', users);
router.use('/login', login)

export default router;