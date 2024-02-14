const Order = require('../models/order')


const orderProduct =async(req,res) =>{
    try {
        const user = req.user.user._id
        const {productId ,qty  ,totalPrice , shippingPrice , taxPrice} = req.body

        const newOrder = await Order.create({

            orderItems :[{
                productId : productId,
                qty : qty,

            }],
            userId : user ,
            totalPrice : totalPrice ,
            shippingPrice : shippingPrice ,
            taxPrice : taxPrice ,

        })
        await newOrder.save()
        res.json(newOrder)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    orderProduct
}