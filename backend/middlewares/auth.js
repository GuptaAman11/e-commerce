const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.verifyJWT = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, "secret_key");

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ msg: "cxcx" });
  }
};




module.exports.buyer = async(req,res,next) => {
    try {
        typeOfUser = req.user.typeOfUser 
        if (typeOfUser !== "Buyer") {
            res.status(200).json({ msg: "you are not buyer" });
            console.log("Buyer")
            
        }
        next()
    } catch (error) {
        console.log(error)
    }    
}

module.exports.seller = async(req,res,next) => {
    try {
        // console.log("req.user",req.user)

        // console.log("req.user._id",req.user.user._id)

        typeOfUser = req.user.user.typeOfUser 
        if (typeOfUser !== "Seller") {
            res.status(200).json({ msg: "you are not Seller" });
            console.log("Seller")
            
        }
        next()
    } catch (error) {
        console.log(error)
    }    
}