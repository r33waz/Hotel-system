import express from 'express'
import {
  Login,
  Logout,
  Signup,
  deleteUser,
  getusers,
} from "../controller/user.controller";
import { authorization, authorize } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/logout/:id', Logout)
router.delete("/delete/:id",authorization as any,authorize('Admin') as any, deleteUser);
router.get("/getalluser", getusers);

export default router