import express from 'express';

const router = express.Router();

import users from './user-routes';



router.use('/users', users);

export default router;