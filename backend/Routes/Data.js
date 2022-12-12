const express = require("express")

const router = express.Router()

// airtel
router.post('/', (req, res) => {
  res.send('data')
})

// // MTN
// router.post('/mtn', (req, res) => {
//   res.send('data')
// })

// // GLO
// router.post('/glo', (req, res) => {
//   res.send('data')
// })

// // (MOBILE)
// router.post('/mobile', (req, res) => {
//   res.send('data')
// })


module.exports = router