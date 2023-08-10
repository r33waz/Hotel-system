import express from "express";
import { bookRoom } from "../controller/booking.controller";

const router = express.Router()

router.post("/bookroom",bookRoom)

export default router