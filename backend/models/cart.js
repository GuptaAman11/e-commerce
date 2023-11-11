const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    cartItems : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product"
            } ,
            quantity : {
                type : Number ,
                default : 0
            }
        }
    ] ,

    userId : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    }


    
})

const Cart = mongoose.model("Cart", cartSchema);


module.exports = Cart;