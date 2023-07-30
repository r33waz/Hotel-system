import express from 'express'
import userRoute from '../routes/user.routes'
import hotelRoute from './hotel.routes'

const router = express.Router()

router.use("/users", userRoute);
router.use("/hotel",hotelRoute)
export default router