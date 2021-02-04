const { Schema } = require("mongoose");

const LineItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
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
