//Importing the user model 
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

async function Register(req, res) {
  const { email, phone, password } = req.body
    if(!email || !phone || !password) {
      res.status(400).json({
        message:"No Field Should Be Empty!"
      })
    }
    const emailExists = await User.findOne({Email:email})
    const phoneExists = await User.findOne({ Phone:phone })

    if(emailExists || phoneExists){
      res.status(400).json({
        message: "Email Or Phone Exists!"
      })
    }
  
    const salt = bcrypt.genSalt()
    const hashpsw = await bcrypt.hash(password,10)

    const user = await User.create({Email:email, Phone:phone, Password:hashpsw})
    if(user){
      const name = user.Email.split("@")[0]
      res.json({
        message:`Welcome! ${name}`,
        details:user
      })
    }

  res.json({
    message: "Some Error Occured"
  })
  }

async function Users(req, res) {
  const user = await User.find({})
  console.log(user)
  res.status(200).send(user)
}

//Login with email Users
async function Login(req, res) {
  const { email, password } = req.body
  const user = await User.findOne({ Email: email })

  if (!user) {
    res.status(400).json({
      message: "Email Not found!"
    })
  }

   const pswCheck = await bcrypt.compare(password, user.Password)

   if(!pswCheck){
    res.json({
      message:"Incorrect Password"
    })
   }

  //  const token = await createToken(user._id)
  const name = user.Email.split("@")[0]
  const createToken = {
    userid: user._id,
    userEmail: user.Email
  }

  const token = jwt.sign(createToken, process.env.SECRET, { expiresIn: '3h' })

   res.json({
    message:`Welcome ${name}`,
    user:user,
    token
   })
   
}


async function LoginWithPhone(req, res) {
  const { phone, password } = req.body
  const user = await User.findOne({ Phone: phone })

  if (!user) {
    res.status(400).json({
      message: "Phone Not found!"
    })
  }

  const pswCheck = await bcrypt.compare(password, user.Password)

  if (!pswCheck) {
    res.json({
      message: "Incorrect Password"
    })
  }

  //  const token = await createToken(user._id)
  const name = user.Email.split("@")[0]
  const createToken = {
    userid: user._id,
    userPhone: user.Phone
  }

  const token = jwt.sign(createToken, process.env.SECRET, { expiresIn: '3h' })

  res.json({
    message: `Welcome ${name}`,
    user: user,
    token
  })

}
// 081395705

module.exports = {
  Register,
  Users,
  Login,
  LoginWithPhone
}
