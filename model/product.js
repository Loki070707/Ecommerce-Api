const mongoose = require("mongoose");

//creating the product schema

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});
//creting a new model called "product"

const Product = mongoose.model("product", productSchema);

module.exports = Product;
