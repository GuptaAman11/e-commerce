 
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

  const user = req.user.user._id
  const { name, description, price,category } = req.body;
  const newProduct = new Product({ 
    name : name, 
    description : description, 
    price : price ,
    category : category ,
    typeOfUserId : user
  });
  try {
    await newProduct.save();
    res.json(newProduct);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//product ko delete karne ke liye

 const deleteProduct = async(req, res) => {

  const {productId} = req.params
  console.log(productId)

    try {
        const deleteProduct = await Product.findOneAndDelete(productId)
        if(!deleteProduct) {
            res.status(404).send({error: "Item not found"})
        }
        res.send(deleteProduct)
    } catch (error) {
        res.status(400).send(error)
    }
};

// get product by  productID
const getProductByproductId = async (req, res) => {
  try {
    const { productId } = req.params;

     
    const product = await Product.findById(productId);

    if (product) {
      res.status(200).json({ msg: "Product Found", product });
    } else {
      res.status(404).json({ msg: "Product not found" });
    }
  } catch (error) {
    console.error('Error getting product by ID:', error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

//update product by product id
const updateProduct = async (req, res) => {
  try {
    const user = req.user.user._id
    const { productId } = req.params;
    const { name, description, price, category } = req.body;

    
    if (!name || !description || !price || !category) {
      return res.status(400).json({ msg: "Please provide all required fields" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, category  ,
      typeOfUserId : user},
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

//get product by userId
const getProductByUserId = async(req,res)=>{
try {
const {userId} = req.params
const product = await Product.findById(userId)
if(!product){
  res.status(401).json({msg:"Product not found"})
}else{
  res.status(200).json({msg:"Product found",product})
}
} catch (error) {
  console.error("Error product not found:", error.message);
  res.status(500).json({ msg: "Internal Server Error" });
}

}



 
module.exports = {

  getAllProducts,

  addProduct,

  deleteProduct ,

  getProductByproductId ,

  updateProduct,

  getProductByUserId

};