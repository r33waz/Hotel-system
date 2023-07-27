import express from 'express'
import { Login, Logout, Signup } from '../controller/user.controller';

const router = express.Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/logout', Logout)

export default router