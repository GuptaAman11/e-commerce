const Cart = require("../models/cart");

const createCart = async (req, res) => {
  try {
    const user = req.user.user._id;
    const { productId } = req.params;
    const { quantity } = req.body;

    const existingCart = await Cart.findOne({userId : user})
    console.log('existingCart',existingCart)
    if(existingCart){
        existingCart.cartItems.push({
            quantity : quantity ,
            productId : productId
        })

        await existingCart.save();
    res.json(existingCart)
    }
    
    else {
        const newCart = new Cart({
      cartItems: [
        {
          quantity: quantity,
          productId: productId,
        },
      ],

      userId: user,
    });
    await newCart.save();
    res.json(newCart);
    }
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createCart,
};


