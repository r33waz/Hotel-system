import express from 'express'
import userRoute from '../routes/user.routes'

const router = express.Router()

router.use("/users", userRoute);

export default router