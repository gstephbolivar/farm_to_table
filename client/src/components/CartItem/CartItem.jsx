import React from "react";
import "./cartitem.css";

const CartItem = ({ img, name, quantity, price }) => {
  return (
    <tr>
      <td>
        <div className="vertical-center" style={{ padding: 10 }}>
          <img src={img} alt="item description" style={{ marginRight: 15 }} />
          <span>{name}</span>
        </div>
      </td>
      <td>
        <div
          className="vertical-center"
          style={{ height: 95, justifyContent: "center" }}
        >
          <div>{quantity}</div>
        </div>
      </td>
      <td>
        <div
          className="vertical-center"
          style={{ height: 95, justifyContent: "center" }}
        >
          <div>${price}</div>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
