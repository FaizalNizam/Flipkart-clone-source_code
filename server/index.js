import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

//components
import connection from './database/database.js'
import data from './seller/datatodb.js'
import router from './router/Router.js'

dotenv.config()

const app=express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',router)

const port=8000

const username=process.env.DB_username
const password=process.env.DB_password

//establishing connection to mongoDB
connection(username,password)

//listening to port 8000
app.listen(port,()=>console.log(`server is running successfully on port ${port}`))

//sellers data to database
data() 