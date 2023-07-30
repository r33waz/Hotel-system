import express from 'express'
import {
  createhotel,
  updateHotel,
  deleteHotel,
} from "../controller/hotel.contoller";

const router = express.Router()

router.post("/hotel", createhotel);
router.put("/update/:id", updateHotel);
router.delete("/delete/:id", deleteHotel);

export default router