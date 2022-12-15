//Importing the user model 
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '3h' } )
}

async function Register(req, res) {
  const { email, phone, password } = req.body
    if(!email || !phone || !password) {
     return res.status(400).json({
        message:"No Field Should Be Empty!"
      })
    }
    const emailExists = await User.findOne({Email:email})
    const phoneExists = await User.findOne({ Phone:phone })

    if(emailExists || phoneExists){
     return res.status(400).json({
        message: "Email Or Phone Exists!"
      })
    }
  
    const salt = bcrypt.genSalt()
    const hashpsw = await bcrypt.hash(password,10)

    const user = await User.create({Email:email, Phone:phone, Password:hashpsw})
    if(user){
      const name = user.Email.split("@")[0]
      return res.json({
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
 return res.status(200).send(user)
}

//Login with email Users
async function Login(req, res) {
  const { email, password } = req.body
  const user = await User.findOne({ Email: email })

  if (!user) {
   return res.status(400).json({
      message: "Email Not found!"
    })
  }

   const pswCheck = await bcrypt.compare(password, user.Password)

   if(!pswCheck){
   return res.json({
      message:"Incorrect Password"
    })
   }

  const name = user.Email.split("@")[0]


   res.status(201).json({
    message:`Welcome ${name}`,
    user:user,
    token:createToken(user._id)
   })
   
}

//Login With Phone
async function LoginWithPhone(req, res) {
  const { phone, password } = req.body
  const user = await User.findOne({ Phone: phone })

  if (!user) {
   return res.status(400).json({
      message: "Phone Not found!"
    })
  }

  const pswCheck = await bcrypt.compare(password, user.Password)

  if (!pswCheck) {
   return res.json({
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

//Reset Password
async function ResetPassword(req, res) {

  const { email, password} = req.body

  const user = await User.findOne({Email:email})
   
  if(!user){
   return res.status(400).json({message:"User Not Found!"})
  }

    const hashNewPassword = await bcrypt.hash(password, 10)
   const newPsw =  await User.findOneAndUpdate({Email:user.Email}, {Password:hashNewPassword})
   res.status(200).send(newPsw)
}
// 081395705

module.exports = {
  Register,
  Users,
  Login,
  LoginWithPhone,
  ResetPassword
}
