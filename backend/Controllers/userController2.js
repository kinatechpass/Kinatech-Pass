//Importing the user model 
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer');
const hte = require('nodemailer-express-handlebars')
const path = require('path')

require("dotenv").config()

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '3h' } )
}

// Register
async function Register(req, res) {
  const { email, phone, password } = req.body
    if(!email || !phone || !password) {
     return res.status(400).json({
        error:"No Field Should Be Empty!"
      })
    }
    const emailExists = await User.findOne({Email:email})
    const phoneExists = await User.findOne({ Phone:phone })

    if(emailExists || phoneExists){
     return res.status(400).json({
        error: "Email Or Phone Exists!"
      })
    }
  
    // Depreciated const salt = bcrypt.genSalt()
    const hashpsw = await bcrypt.hash(password,10)

    const user = await User.create({Email:email, Phone:phone, Password:hashpsw, verifiedEmail:false})
    if(user){
      const name = user.Email.split("@")[0]
      // Email verification setups
      let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
      // point to the template folder
      const handlebarOptions = {
        viewEngine: {
          partialsDir: path.resolve('./views/'),
          defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
      };

      // use a template file with nodemailer
      mailTransporter.use('compile', hte(handlebarOptions))


      let mailDetails = {
        from: process.env.EMAIL,
        to: user.Email,
        subject: 'Email Verification',
        template: 'email',
        context: {
          name: user.Email.split("@")[0],
        },
        text: `Hi ${name} Welcome to Kinatech pay, 
        To start enjoying our services Verify Your Email! Click On the link below to start`
      };

      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log('An Error Occurred');
        } else {
          console.log('Email sent successfully');
        }
      });
//End of setups

      return res.json({
        message:`Welcome! ${name}`,
        details:user,
        info:'Kindly Check Your Inbox And verify Your Email!'
      })
    }

  res.json({
    error: "Some Error Occured"
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
      error: "Email Not found!"
    })
  }

   const pswCheck = await bcrypt.compare(password, user.Password)

   if(!pswCheck){
   return res.status(400).json({
      error:"Incorrect Password"
    })
   }

  const name = user.Email.split("@")[0]


   res.status(201).json({
    message:`Welcome ${name}`,
    details:user,
    token:createToken(user._id)
   })
   
}

//Login With Phone
async function LoginWithPhone(req, res) {
  const { phone, password } = req.body
  const user = await User.findOne({ Phone: phone })

  if (!user) {
   return res.status(400).json({
      error: "Phone Not found!"
    })
  }

  const pswCheck = await bcrypt.compare(password, user.Password)

  if (!pswCheck) {
   return res.json({
      error: "Incorrect Password"
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
    details: user,
    token
  })

}

async function sendResetPswLink(req, res){
   const {email } = req.body

  const user = await User.findOne({ Email: email })

  if (!user) {
    return res.status(400).json({ error: "User Not Found!" })
  }

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  // point to the template folder
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./views/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
  };

  // use a template file with nodemailer
  mailTransporter.use('compile', hte(handlebarOptions))


  let mailDetails = {
    from: process.env.EMAIL,
    to: user.Email,
    subject: 'Email Verification',
    template: 'resetpsw',
    context: {
      name: user.Email.split("@")[0],
    },
    text: `Hi ${name} Welcome to Kinatech pay, 
        Click the link below to reset your password`
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('An Error Occurred');
    } else {
      console.log('Email sent successfully');
    }
  });
  //End of setups

  return res.json({
    message: `Welcome! ${name}`,
    details: user.Email,
    info: 'Kindly Check Your Inbox And Click The Link to Reset your password'
  })
}
//Reset Password
async function ResetPassword(req, res) {

  const { email, password} = req.body

  const user = await User.findOne({Email:email})
   
  if(!user){
   return res.status(400).json({error:"User Not Found!"})
  }

    const hashNewPassword = await bcrypt.hash(password, 10)
   const newPsw =  await User.findOneAndUpdate({Email:user.Email}, 
    {Password:hashNewPassword})
   res.status(200).send(newPsw)


}



  //Email Verification
async function verifyEmail (req, res) {
 

  const emailIsVerified = await User.findOneAndUpdate({Email:req.user.Email},
     {verifiedEmail:true})
  return res.status(201).json({
    name:req.user.Email.split("@")[0],
    message:"Your Email Has Been Verified! You Can Close This tab now",
    user:emailIsVerified
  })
}
// 081395705

module.exports = {
  Register,
  Users,
  Login,
  LoginWithPhone,
  ResetPassword,
  verifyEmail,
  sendResetPswLink
}
