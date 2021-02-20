import React from "react";

const CartContext = React.createContext({
  userId: "",
  lineItems: [],
});

export default CartContext;
