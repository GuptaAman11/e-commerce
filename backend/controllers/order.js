const Order = require('../models/order')

const buyProduct = async(req,res)=>{
const {prodId} = req.params
const user = req.user.user._id
const {productId,userId,address,total,quntity} = req.body
const buy =  new Order({
    productId : productId,
    userId : userId,
    address : address,
    total : total,
    quntitiy : quntity
});
try {
    await Order.save(buy)
    res.json({msg:"Your order is placed",Order});//
} catch (error) {
    res.status(401).json({error:error.msg});
}
}

module.exports = {buyProduct}