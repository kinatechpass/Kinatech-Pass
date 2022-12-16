const mongoose = require("mongoose")

 async function dbConnect () {
   await mongoose.connect("mongodb://localhost:27017/kinatechnnnb", (err) => {
     if (err) throw err;
     console.log("Database Running...")
   })
 }

// 7760 3120
// 0022 4771
// 4102 2003
// 4599 2339
// 9060 9627
// 4090 4879
// 3140 2881
// 4449 9128
// 5559 1989
// 2187 6838
module.exports = dbConnect