const Cart = require("../models/cart");
const createCart = async (req, res) => {
  try {
    const user = req.user.user._id;
    const { productId } = req.params;
    const { quantity } = req.body;

    const existingCart = await Cart.findOne({ userId: user });

    if (existingCart) {
      const existingProduct = existingCart.cartItems.find(
        (item) => item.productId.toString() === productId.toString()
      );

      if (existingProduct) {
        console.log('Product already exists in the cart');
        return res.json(existingCart);
      } else {
        existingCart.cartItems.push({
          productId: productId,
          quantity: quantity
        });
        await existingCart.save();
        return res.json(existingCart);
      }
    } else {
      const newCart = new Cart({
        cartItems: [
          {
            productId: productId,
            quantity: quantity
          },
        ],
        userId: user,
      });

      await newCart.save();
      return res.json(newCart);
    }
  } catch (error) {
    console.error("Error creating cart:", error.message);
    return res.status(400).json({ error: error.message });
  }
};



const getCartProductByUserId = async (req, res) => {
  try {
    const user = req.user.user._id;
    const cartProduct = await Cart.findOne({userId:user}).populate('cartItems.productId');

    if (!cartProduct) {
      return res.status(401).json({ msg: "Product not found" });
    } else {
      return res.status(200).json(cartProduct);
    }
  } catch (error) {
    console.error("Error retrieving cart products:", error.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateCart = async (req, res) => {
  try {
    const  userId  = req.user.user._id;
    console.log("user" , userId)
    const { productId } = req.params;
    const { quantity } = req.body;

    const userCart = await Cart.findOne({ userId: userId });
    if (userCart) {
      const indexOfProduct = userCart.cartItems.findIndex(
        (item) => item.productId.toString() === productId.toString()
      );

      if (indexOfProduct !== -1) {
        // Update the quantity of the specific product in cartItems
        userCart.cartItems[indexOfProduct].quantity = quantity;

        // Save the updated cart
        await userCart.save();

        res.status(200).json({ msg: "Product updated successfully", updatedCart: userCart });
      } else {
        res.status(404).json({ msg: "Product not found in the cart" });
      }
    } else {
      res.status(404).json({ msg: "User cart not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};


module.exports = {
  createCart,
  getCartProductByUserId ,
  updateCart
};
