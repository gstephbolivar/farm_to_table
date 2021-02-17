const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: ["Enter a product name."],
  },
  description: {
    type: String,
  },
  unitType: {
    type: String,
    required: ["Enter the unit type (pounds, ounces, grams, etc)."],
  },
  unitSize: {
    type: Number,
    required: ["Enter how many units per package/container."],
  },
  price: {
    type: Number,
    required: ["Enter a product price."],
  },
  quantity: {
    type: Number,
    required: ["Enter a product/container quantity."],
  },
  category: {
    type: String,
    required: ["Select a product category."],
  },
  pathway: {
    type: String,
  },
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
