 
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
        const {id} = req.params
        const deleteProduct = await Product.findOneAndDelete(id)
        if(!deleteProduct) {
            res.status(404).send({error: "Item not found"})
        }
        res.send(deleteProduct)
    } catch (error) {
        res.status(400).send(error)
    }
};

// get product by id 

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

     
    const product = await Product.findById(id);

    if (product) {
      res.status(200).json({ msg: "Product Found", product });
      console.log(product);
    } else {
      res.status(404).json({ msg: "Product not found" });
    }
  } catch (error) {
    console.error('Error getting product by ID:', error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


//update the existing product

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    
    if (!name || !description || !price || !category) {
      return res.status(400).json({ msg: "Please provide all required fields" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404).json({ msg: "Product not found" });
    } else {
      res.status(200).json({ msg: "Product updated", updatedProduct });
    }
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


 
module.exports = {

  getAllProducts,

  addProduct,

  deleteProduct,

  getProductById,

  updateProduct

};