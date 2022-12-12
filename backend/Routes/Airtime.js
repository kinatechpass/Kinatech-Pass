const express = require("express")

const router = express.Router()

 // airtel
router.post('/', (req, res)=>{
   res.send('airtime')
})

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