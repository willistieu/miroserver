import dotenv from 'dotenv'

dotenv.config('../.env')

export const note_data = process.env.NOTE_MONGO_DATA;
export const PORT = process.env.PORT
export const user_data = process.env.USERS_DATA
export const secret_key = process.env.SECRET_KEY