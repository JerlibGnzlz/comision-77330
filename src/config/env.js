import dotenv from 'dotenv'
import { config } from './commander.js'

// intenta cargar el archivo según el mode
dotenv.config({ path: `.env.${config.mode}` })

export const env = {
    port: Number(process.env.PORT),
    mongoUrl: process.env.MONGO_URL
}