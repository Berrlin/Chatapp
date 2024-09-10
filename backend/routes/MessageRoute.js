import express from "express"
import { getMessage, sendMessage } from "../controller/MessageController.js";
import authMiddleware from "../middleware/auth.js";

const messageRoute = express.Router();

messageRoute.post("/send/:id",authMiddleware,sendMessage)
messageRoute.get("/:id",authMiddleware, getMessage)

export default messageRoute;