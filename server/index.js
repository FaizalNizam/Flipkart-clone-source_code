import express from 'express'
import dotenv from 'dotenv'

//components
import connection from './database/database.js'
import data from './datatodb.js'

dotenv.config()

const app=express()
const port=8000

const username=process.env.DB_username
const password=process.env.DB_password

connection(username,password)
app.listen(port,()=>console.log(`server is running successfully on port ${port}`))

//data to DB
data()