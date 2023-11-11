const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
productId :{
    type : String,
    enum : ["productsId"],
    required : true
},
userId :{
    type : String,
    reuired : true
},
address : {
    city : String,
    village : String,
    locality : String,
    pinNo : Number,
    road : String
},
total : {
    type : Number
},
quntitiy : {
    type : Number
},
typeOfUserId : {
    type : mongoose.Types.ObjectId,
    ref : "User"
},


})

module.exports = Order = mongoose.model("Order",orderSchema);
    
