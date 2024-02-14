const Address = require('../models/address')
const createAddress = async(req,res) => {
    const { state , district ,city ,address ,name ,phoneNumber ,alternativeNumber ,userId} = req.body
    const {userId} = req.user.user._id 
    try {
        const newAddress = new Address({
            addressSection : [{
                state : state ,
                district : district ,
                city : city ,
                address : address 
            }] ,
            personalDetails : [{
                name : name ,
                phoneNumber : phoneNumber ,
                alternativeNumber : alternativeNumber
            }] ,
            user : userId
        })

        await newAddress.save()
        res.json(newAddress)
    }catch(error) {
        console.log(error)
    }
}

module.exports = {
    createAddress
}