const express = require("express")
const { buyAirtime } = require("../Controllers/AirtimeController")
const router = express.Router()

 // airtel
router.post('/', buyAirtime)

// // MTN
// router.post('/mtn', (req, res) => {
//   res.send('airtime')
// })

// // GLO
// router.post('/glo', (req, res) => {
//   res.send('airtime')
// })

// // (MOBILE)
// router.post('/mobile', (req, res) => {
//   res.send('airtime')
// })


module.exports = router