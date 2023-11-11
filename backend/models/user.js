const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
  
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: false,
    },

    address:{
        type:String,
        required:false,
    },

    phoneNumber:{
        type:Number,
        required:false,
    } ,
  
    typeOfUser : {
        type : String ,
        enum : ["Buyer" , "Seller" , "Admin"]
    }

    
})

const User = mongoose.model("User", userSchema);


module.exports = User;

