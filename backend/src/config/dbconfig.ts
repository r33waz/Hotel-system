import mongoose from "mongoose";
import 'dotenv/config'

//establising the mongoose database connection 
export const dbconnect = async () => {
    const MONGO_URL: string = process.env.MONGO_URL ?? ''
    const connection = await mongoose.connect(MONGO_URL)
    console.log('Mongodb connected',connection.connection.host)
}