require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index.js')

const PORT = process.env.PORT || 5000
const URL_DB = process.env.DB_URL || 'mongodb+srv://user:user@cluster0.noaz1wg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api',router)

const start = async () =>{
    try {
        await mongoose.connect(URL_DB)
        app.listen(PORT,() => console.log('работает сервер' + PORT))
    } catch (e) {
        
    }
}

start()

