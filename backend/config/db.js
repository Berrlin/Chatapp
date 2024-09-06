import mongoose from 'mongoose'


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://bin:123@chat.j6pbo.mongodb.net/?retryWrites=true&w=majority&appName=chat')
    .then(()=>console.log("DB Connected"))
}