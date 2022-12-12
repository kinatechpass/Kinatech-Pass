 //Importing the user model 
 const User = require("../Models/userModel")
 const bcrypt = require("bcrypt")
 const jwt = require("jsonwebtoken")
 require("dotenv").config()

 async function Register(req, res) {
  const {email, phone, password} = req.body
   
   if (email == " " || phone == " " || password == " ") {
    res.status(400).send("No field Should be empty!")
  }
   const hashpsw = await bcrypt.hash(password, 10)
   const user = await User.create({Email:email, Phone:phone, Password:hashpsw}).then((newUser)=>{
      const name = newUser.Email
      const shortenedName = name.split("@")[0]
      res.status(200).send(`Welcome! ${shortenedName} Below are Your Details: \n ${newUser}`)
      newUser.save().then((user)=>{
         console.log(user, "user saved!")
      })
      console.log(`User With ${newUser.Email} Has Been Created Succesfully!`)
   })
   .catch((e)=>{
    const errMsg = "Some Error Ocurred"
    res.status(400).send(errMsg)
   //  res.status(400).send(e)
   })
   // res.status(200).send(user)
 }

async function Users(req, res) {
    const user = await User.find({})
    console.log(user)
   res.status(200).send(user)
}

//Login Users
async function Login(req, res) {
   const { email, password} = req.body
   

     await User.findOne({Email:email}).then((user)=>{
       if(!user){
         res.status(400).send({error:"Email Not found!"})
       }
       bcrypt.compare(password, user.Password).then((pswCheck)=>{
         if(!pswCheck){
            res.status(400).send({error:"Password does not match"})
         }
          const createToken = {
             userid: user._id,
             userEmail: user.Email
          }

          const token = jwt.sign(createToken, process.env.SECRET, { expiresIn: '3h' })

          const name = user.Email.split("@")[0]
         //  res.send(`Welcome ${name} below are your details: \n ${user}`)
          res.status(200).send({message:`welcome ${name}`, token, details:user })

       })
       .catch((e)=>{
          res.status(400).send({ error: "Password does not match", e})
       })
    })
    .catch((e)=>{
      res.status(400).send({error:"Email Not Found!", e})
    })
 
  
}

// 081395705

module.exports = {
  Register,
  Users,
  Login
}
