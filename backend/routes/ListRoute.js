import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { getUserForSideBar } from '../controller/ListController.js'

const listRoute = express.Router()

listRoute.get("/",authMiddleware,getUserForSideBar)


export default listRoute