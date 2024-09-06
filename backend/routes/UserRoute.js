import express from "express"
import multer from "multer"
import { signup } from "../controller/USerController.js";

const userRoute = express.Router();
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage});

userRoute.post("/signup",upload.single("image"),signup)


export default userRoute 