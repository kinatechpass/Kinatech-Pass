const express = require("express")
const { getBalance, addBalance} = require("../Controllers/ProfileController")
const requireAuth = require("../Middleware/requireAuth")
const router = express.Router()

router.use(requireAuth)
// Get Profile balance
router.get('/', getBalance)

// Update Profile Balance
router.post('/balance', addBalance)



module.exports = router