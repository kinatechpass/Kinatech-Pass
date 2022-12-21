const express = require("express")
const { Register, Users, Login, LoginWithPhone, ResetPassword, verifyEmail, sendResetPswLink } = require("../Controllers/userController2")
const  requireAuth  = require("../Middleware/requireAuth")
const router = express.Router()
const cors = require('cors')

router.use(cors({
  origin: 'http://localhost:3000'
}));
// Register
router.post('/register', Register)

router.post('/sendLink', sendResetPswLink)

router.post('/resetpassword', ResetPassword)
 


// Login
router.post('/login', Login)

// Login with phone 
router.post('/login-phone', LoginWithPhone)

router.use(requireAuth)
router.get('/users',Users)
router.get('/emailverify', verifyEmail)
module.exports = router