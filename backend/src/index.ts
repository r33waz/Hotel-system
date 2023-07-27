import express,{Request,Response} from 'express'
import 'dotenv/config'
import Mainrouter from './routes/main'
import { dbconnect } from './config/dbconfig'
import cors from "cors";

const app = express()
dbconnect()
app.use(cors())

app.use(express.json())
app.use(Mainrouter)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
    console.log('project started',PORT)
})