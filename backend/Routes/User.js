const express = require("express")
const { Register, Users, Login, LoginWithPhone } = require("../Controllers/userController2")
const  requireAuth  = require("../Middleware/requireAuth")
const router = express.Router()

// Register
router.post('/register', Register)

 


// Login
router.post('/login', Login)

// Login with phone 
router.post('/login-phone', LoginWithPhone)

router.use(requireAuth)
router.get('/users',Users)

module.exports = router