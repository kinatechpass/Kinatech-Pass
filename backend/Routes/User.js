const express = require("express")
const { Register, Users, Login, LoginWithPhone, ResetPassword, verifyEmail } = require("../Controllers/userController2")
const  requireAuth  = require("../Middleware/requireAuth")
const router = express.Router()

// Register
router.post('/register', Register)

router.post('/resetpassword', ResetPassword)
 


// Login
router.post('/login', Login)

// Login with phone 
router.post('/login-phone', LoginWithPhone)

router.use(requireAuth)
router.get('/users',Users)
router.get('/emailverify', verifyEmail)
module.exports = router