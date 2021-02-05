const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
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
  },
  quantity: {
    type: Number,
  },
  category: {
    type: String,
  },
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
