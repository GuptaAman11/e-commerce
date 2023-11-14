const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    orderItems  : [
        {
            name: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },

            productid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            
            },
        }
        
    ] ,

    userId : {
        type : mongoose.Types.ObjectId ,
        ref : "User"
    } ,

    itemsPrice: {
        type: Number,
        required: true
    },
    shippingPrice: {
        type: Number,
        required: true
    },
    taxPrice: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },


})

module.exports = Order = mongoose.model("Order",orderSchema);
    
