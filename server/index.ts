import dotenv from 'dotenv'
import Server from './models/app'

dotenv.config()

const server = new Server()

server.listen() 