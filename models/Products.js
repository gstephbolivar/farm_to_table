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
  },
  unitSize: {
    type: Number,
  },
  price: {
    type: Number,
    required: ["Enter a product price."],
  },
  quantity: {
    type: Number,
    required: ["Enter a product quantity."],
  },
  category: {
    type: String,
    required: ["Select a product category."],
  },
  photo: {
    type: String,
    default: "https://placedog.net/300/300",
  },

  totalAmount: {
    type: Number,
  },
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
