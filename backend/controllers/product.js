 
const Product = require('../models/product');



// saare product ko dikhane ke liye all products

const getAllProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};

 
// naya product daalne ke liye

const addProduct = async (req, res) => {

  const { name, description, price,category } = req.body;
  const newProduct = new Product({ name, description, price ,category});
  try {
    await newProduct.save();
    res.json('product saved succesfully');

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//product ko delete karne ke liye

 const deleteProduct = async(req, res) => {

    try {
        const deleteProduct = await Product.findOneAndDelete( {_id: req.params.id} )
        if(!deleteProduct) {
            res.status(404).send({error: "Item not found"})
        }
        res.send(deleteProduct)
    } catch (error) {
        res.status(400).send(error)
    }
};
 
module.exports = {

  getAllProducts,

  addProduct,

  deleteProduct

};