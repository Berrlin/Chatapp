import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5},
    gender: {type: String, required: true, enum:["male","female"]},
    profilePic: {type:String, default:""}
},{timestamps: true})

const userModel = mongoose.models.user || mongoose.model("user",userSchema)

export default userModel;