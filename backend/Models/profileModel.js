const mongoose = require("mongoose")
const User = require("../Models/userModel")
// mongoose schema
const Schema = mongoose.Schema

const profileShema = new Schema({
  // Earnings:{
  //   type:mongoose.Schema.Types.ObjectId,
  //   ref:User,
  // },
  Amount:{
    type:Number,
    required:true
  },
  userId:{
   type:String,
   required:true
  }

}, { timestamps: true })

const Profile = mongoose.model('profile', profileShema)

module.exports = Profile