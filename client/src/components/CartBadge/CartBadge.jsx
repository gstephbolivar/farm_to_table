import { useState, useEffect } from "react";
import "./cartbadge.css";

const CartBadge = (props) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(props.count);
  }, [props.count]);

  return (
    <span id="cartBadge">
      {props.count > 0 ? <span id="cartCount">{cartCount}</span> : null}
    </span>
  );
};

export default CartBadge;
