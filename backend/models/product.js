const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({

  typeOfUserId : {
    type : mongoose.Types.ObjectId,
    ref : "User"
  },
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
});

module.exports = Product = mongoose.model("Product", productSchema);
