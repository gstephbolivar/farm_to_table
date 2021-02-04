const { Schema } = require("mongoose");

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
