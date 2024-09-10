import conversationModel from '../model/conversationModel.js'
import messageModel from '../model/messageModel.js'
const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const{ id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await conversationModel.findOne({
            participants: {$all: [senderId, receiverId]},
        })
        if(!conversation){
            conversation = await conversationModel.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new messageModel({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        await conversation.save();
        await newMessage.save();
        res.json({success: true, message: newMessage})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:"Fail Message"})
    }
}


const getMessage = async(req,res)=>{
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id
        const conversation = await conversationModel.findOne({
            participants:{$all: [senderId, userToChatId]},
        }).populate("messages");
        if(!conversation){
            return res.json({success: false, message:[]})
        }

        const messages = conversation.messages
        res.json({success: true, message: messages})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message:"Fail Message"})
    }
}

export {sendMessage, getMessage}