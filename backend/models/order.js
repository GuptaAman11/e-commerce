const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    productDetail : [{
        pId : {
            type : mongoose.Types.ObjectId ,
            ref : "Product"
        } ,
        price : {
            type: Number ,

        }
    }] ,
    userId : {
        type : mongoose.Types.ObjectId ,
        ref : "User"
    }



})

module.exports = Order = mongoose.model("Order",orderSchema);
    
