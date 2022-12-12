const mongoose = require("mongoose")

 async function dbConnect () {
   await mongoose.connect("mongodb://localhost:27017/kinatech", (err) => {
     if (err) throw err;
     console.log("Database Running...")
   })
 }


module.exports = dbConnect