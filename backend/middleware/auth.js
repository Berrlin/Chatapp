import jwt from "jsonwebtoken"
import userModel from "../model/userModel.js";

const authMiddleware = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.json({success: false, message:"No Token"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.json({success: false, message:"INVALID Token"})
        }

        const user = await userModel.findById(decoded.userId).select("-password")
        if(!user){
            return res.json({success: false, message:"User Not Found"})
        }
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        res
    }
}

export default authMiddleware;


