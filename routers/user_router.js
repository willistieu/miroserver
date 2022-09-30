import express from 'express'
import { login, register } from '../controller/user_controller.js'

export const user_router = express.Router()

user_router.post('/register', register)
user_router.post('/login', login)