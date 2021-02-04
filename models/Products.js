const { Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
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
