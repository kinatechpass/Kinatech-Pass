const User = require("../Models/userModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers
  
  try{
   
   
   if(!authorization){
    return res.json({
       message: "Not Authorised"
     })
   }
    const token = authorization.split(" ")[1]
    // const verifyToken = await jwt.verify(token, process.env.SECRET)

    // const user = await verifyToken

    const decodedToken = await jwt.verify(token, process.env.SECRET)

    req.user = await User.findById(decodedToken.id).select('id')
    console.log(req.user)
    
    next()

    // req.user = user

    // next()

  }
  catch(e){
  return res.json(e)
  }
}

module.exports = requireAuth

