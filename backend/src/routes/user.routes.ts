import express from 'express'
import {
  Login,
  Logout,
  Signup,
  deleteUser,
} from "../controller/user.controller";

const router = express.Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/logout', Logout)
router.delete("/delete/:id", deleteUser);

export default router