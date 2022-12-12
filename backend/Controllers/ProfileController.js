const User = require("../Models/userModel")
const Profile = require("../Models/profileModel")

const getBalance = async (req, res) => {

  try{
    const balance = await Profile.findOne({ Amount })
    res.status(200).json({
      message: balance
    })
  }catch(e){
    res.status(400).json({message:'An Error Occured!',e})
  }
}

const addBalance = async (req, res) => {
  
    try{
      const { Amount } = req.body
      const userId = req.user._id

      const newBalance = await Profile.create({ Amount, userId})
     res.status(200).json({message:newBalance})
    }
    catch(e){
      res.status(400).json({message:'An Error Occured!', e})
    }
}

module.exports = {
  getBalance,
  addBalance
}