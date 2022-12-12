const mongoose = require("mongoose")

// mongoose schema
const Schema = mongoose.Schema

const userShema = new Schema({
  Email: {
    type: String,
    required: [true, "Email Is Required!"],
    unique: [true, "Email Exists"],
  },
   Phone: {
    type: String,
    required: [true, "phone is required"],
    unique: [true, "phone number exists"],
    min:10
  },
  Password: {
    type: String,
    required: [true, "password is required"],
    min:4
  },
  RefCode: {
    type: String,
    min:4
  }
}, {timestamps:true})

const User = mongoose.model('user', userShema)

module.exports = User