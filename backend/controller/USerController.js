import userModel from "../model/userModel.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from '../utils/generateToken.js'

const login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        const user = await userModel.findOne({ userName })
        if (!user) {
            return res.json({ success: false, message: "User Doesn't Exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Wrong Password" })
        }
        generateTokenAndSetCookie(user._id, res)
        res.json({ success: true, userId: user._id })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Login Fail" })
    }
}

const signup = async (req, res) => {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    try {
        if (!req.file) {
            return res.json({ success: false, message: "No file uploaded" });
        }
        let image_filename = `${req.file.filename}`

        if (password != confirmPassword) {
            return res.json({ success: false, message: "Password doesn't match" })
        }
        const exists = await userModel.findOne({ userName })
        if (exists) {
            return res.json({ success: true, message: "Username is already" })
        }
        if (password.length <= 5) {
            return res.json({ success: false, message: "Password length must be > 5 digits" })
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
        if(newUser){
            await generateTokenAndSetCookie(newUser._id, res)
            const user = await newUser.save();
            res.json({ success: true, userId: user._id });
        }else{
            res.json({success: false, message:"Invalid UserData"})
        }
    
        

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error API" })
    }
}

const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge: 0})
        res.json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Logout failed" });
    }
}

export { signup, login,logout }