const { verifyJWT} = require('../middlewares/auth');



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
        typeOfUser = req.user.typeOfUser 
        console.log("typeOfUser" , typeOfUser)
        if (typeOfUser !== "Seller") {
            res.status(200).json({ msg: "you are not Seller" });
            console.log("Seller")
            
        }
        next()
    } catch (error) {
        console.log(error)
    }    
}