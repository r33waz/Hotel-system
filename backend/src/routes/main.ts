import express from "express";
import userRoute from "../routes/user.routes";

import roomRoute from "./room.routes";

const router = express.Router();

router.use("/users", userRoute);

router.use("/room", roomRoute);
export default router;
