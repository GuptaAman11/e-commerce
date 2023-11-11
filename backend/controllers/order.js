const Order = require('../models/order')

const buyProduct = async(req,res)=>{
const {prodId} = req.params
// const user = req.user.user._id
const { userId,address,total,quntity} = req.body
const buy =  new Order({
    productId : prodId,
    userId : userId,
    address : address,
    total : total,
    quntitiy : quntity
});
try {
    await Order.save(buy)
    res.json({msg:"Your order is placed",Order});//
} catch (error) {
    res.status(401).json({msg:"Oreder not placed"});
}
}

module.exports = {buyProduct}