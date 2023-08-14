import express from "express";
import {
  Login,
  Logout,
  Signup,
  deleteUser,
  getusers,
} from "../controller/user.controller";


const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout/:id", Logout);
router.delete(
  "/delete/:id",
  deleteUser
);
router.get("/getalluser", getusers);

export default router;
