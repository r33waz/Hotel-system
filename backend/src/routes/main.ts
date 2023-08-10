import express from "express";
import userRoute from "../routes/user.routes";

import roomRoute from "./room.routes";
import bookingRoute from "../routes/booking.routes"

const router = express.Router();

router.use("/users", userRoute);

router.use("/room", roomRoute);
router.use("/booking",bookingRoute);
export default router;
