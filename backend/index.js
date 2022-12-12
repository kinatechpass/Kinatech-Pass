//imports
const express = require("express")
const { Users } = require("./Controllers/userController2")
const { auth } = require("./Middleware/auth")
const { requireAuth } = require("./Middleware/requireAuth")

require("dotenv").config()
const dbConnect = require("./database/dbConnect")
//routes
const airtime = require("./Routes/Airtime")
const data = require("./Routes/Data")
const user = require("./Routes/User")
const profile = require("./Routes/Profile")
//initiliasing express
 const app = express()
//setting port
//  const PORT = 5000
 
app.use(express.json())

 dbConnect()
 //listener
 app.listen(process.env.PORT, ()=>{
   console.log("Now Listening On Port", process.env.PORT)
 })
//middlewares
app.use('/api/v1/airtime', airtime)
app.use('/api/v1/data', data)
app.use('/api/v1/account', user)
app.use('/api/v1/profile', profile)

// app.get("/api/v1/users", auth, Users)
 