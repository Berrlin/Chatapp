import userModel from "../model/userModel.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
const signup = async(req,res)=>{
    try {
        if (!req.file) {
            return res.json({ success: false, message: "No file uploaded" });
          }
        let image_filename = `${req.file.filename}`
        const {fullName,userName, password, confirmPassword, gender} = req.body
        if(password != confirmPassword){
            return res.json({success:false, message:"Password doesn't match"})
        }
        const user = await userModel.findOne({userName})
        if(user){
            return res.json({success: true, message:"Username is already"})
        }
        if(password.length<=5){
            return res.json({success: false, message:"Password length must be > 5 digits"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: image_filename
        })
        try {
            await newUser.save()
            const token = createToken(newUser._id)
            res.json({ success: true, token, userId: newUser._id });
            console.log(newUser)
        } catch (error) {
            console.log(error)
            res.json({success:false, message:"Add FAILED"})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message:"Error API"})
    }
}

export {signup}