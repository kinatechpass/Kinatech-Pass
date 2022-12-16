// ==========+=====================
// Note: This Version Is Depreciated and is not is use
// This Code is to be ignore if u find it on any of my github
// ============+====================
const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = async (req, res, next) => {
  try {
   
    const token = await req.headers.authorization.split(" ")[1];

    
    const decodedToken = await jwt.verify(token, process.env.SECRET);

    
    const user = await decodedToken;

   
    req.user = user;

    
    next();

  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
