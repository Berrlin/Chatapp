import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js';
import userRoute from './routes/UserRoute.js';
import listRoute from './routes/ListRoute.js';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import messageRoute from './routes/MessageRoute.js';

const app = express();
const port = 4000;
app.use(express.json())
app.use(cookieParser())
app.use(cors())

connectDB();

app.use("/api/user",userRoute)
app.use("/images",express.static('uploads')) 
app.use("/api/message",messageRoute)
app.use("/api/list",listRoute)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})