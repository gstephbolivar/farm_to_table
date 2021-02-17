const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LineItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  unitSize: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
});

const LineItem = mongoose.model("LineItem", LineItemSchema);

module.exports = LineItem;
