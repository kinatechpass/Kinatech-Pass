const User = require("../Models/userModel")
const Profile = require("../Models/profileModel")

const getBalance = async (req, res) => {
   
  try{
    const userId = req.user
    const balance = await Profile.findOne({ userId: req.user._id }).sort({createdAt:-1})
   return res.status(200).json({
      message: balance,
      userId
    })
  }catch(e){
   return res.status(400).json({error:'An Error Occured!',e})
  }
}

const Transactions = async (req, res) => {

  try {
    const userId = req.user._id
    const balance = await Profile.find({ userId: req.user._id }).sort({createdAt:-1})
    return res.status(200).json({
      message:"Recent Transactions",
      data: balance
    })
  } catch (e) {
    return res.status(400).json({ error: 'An Error Occured!', e })
  }
}

const addBalance = async (req, res) => {
  
    try{
      const { Amount } = req.body

      const userId = req.user._id

      const userEmail = req.user.Email

      const newBalance = await Profile.create({ Amount, userId})

    return res.status(200).json({
      success:`Deposit of ${Amount} Was Succesfull`,
      message:newBalance, 
      userEmail 
    })
    }
    catch(e){
     return res.status(400).json({error:'An Error Occured!', e})
    }
}

module.exports = {
  getBalance,
  addBalance,
  Transactions
}