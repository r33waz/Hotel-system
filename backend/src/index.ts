import express,{Request,Response} from 'express'
import 'dotenv/config'
import Mainrouter from './routes/main'

const app = express()

app.get('/', (req:Request, res:Response) => {
    res.send("Hello World!")
})
app.use(Mainrouter)

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log('project started',PORT)
})