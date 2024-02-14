const mongoose =require("mongoose")
const addressSchema = new mongoose.Schema({
    addressSection : [{
        state : {
            type : String ,
            required : true
        },
        district : {
            type : String ,
            required : true
        },
        city : {
            type : String ,
            required : true
        },
        address : {
            type : String ,
            required : true
        },
        pincode : {
            type : Number ,
            required : true
        },
    }] ,
    personalDetails : [{
        name : {
            type : String ,
            required : true
        },
        phoneNumber : {
            type : Number ,
            required : true
        },
        alternativeNumber : {
            type : Number ,
            required : true
        },
    }] ,
    user : {
        type : mongoose.Schema.Types.ObjectId
    }
})