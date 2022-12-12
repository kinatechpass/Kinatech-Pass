const User = require("../Models/userModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers

  try{
   
   
   if(!authorization){
     res.json({
       message: "Not Authorised"
     })
   }
    const token = authorization.split(" ")[1]
    // const verifyToken = await jwt.verify(token, process.env.SECRET)

    // const user = await verifyToken

    const { userId } = jwt.verify(token, process.env.SECRET)

    req.user = await User.find({ userId }).select('_id')
    next()

    // req.user = user

    // next()

  }
  catch(e){
   res.json(e)
  }
}

module.exports = requireAuth

