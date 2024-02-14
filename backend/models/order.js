const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    orderItems  : [
        {
            
            qty: {
                type: Number,
                default : 1
            },

            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            
            },
        }
        
    ] ,

    userId : {
        type : mongoose.Types.ObjectId ,
        ref : "User"
    } ,
    
    shippingPrice: {
        type: Number,
    },
    taxPrice: {
        type: Number,
    },
    totalPrice: {
        type: Number,
    },


})

module.exports = Order = mongoose.model("Order",orderSchema);
    
