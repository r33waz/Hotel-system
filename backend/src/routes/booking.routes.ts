import express from "express";
import {
    bookRoom, getallBookings, getbookingbyuserid,
    // cancelbookroom
} from "../controller/booking.controller";

const router = express.Router();

router.post("/bookroom", bookRoom);
router.get("/bookroom/getallbooking", getallBookings);
router.get("/bookroom/getuserbooking/:id", getbookingbyuserid);
// router.post("/cancelbookroom",cancelbookroom)

export default router;
