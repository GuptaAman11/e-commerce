const mongoose =require("mongoose")
const cartSchema = new mongoose.Schema({
  cartItems : [{
    productId : {
      type :mongoose.Schema.Types.ObjectId,
      ref : 'Product'
    },
    quantity : {
      type : Number ,
      default : 1
    }
  }] ,
  userId : {  
    type : mongoose.Schema.Types.ObjectId ,
    ref : 'User'
  }
})
// cartSchema.index({ userId: 1, 'cartItems.productId': 1 }, { unique: true });

const Cart = mongoose.model("Cart" ,cartSchema)
module.exports = Cart
