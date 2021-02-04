const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  // array of items for the order
  LineItem: [
    {
      type: Schema.Types.ObjectId,
      ref: "LineItem",
    },
  ],
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
