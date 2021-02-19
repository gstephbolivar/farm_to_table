import React from "react";

const OrderHistoryItem = ({ lineItem }) => {
  return (
    <tr>
      <td className="is-vcentered" key={lineItem.product._id}>
        <div className="vertical-center">
          <img
            id="thumbnail"
            src={lineItem.product.pathway}
            alt="item description"
          />

          <span>
            {lineItem.product.name} ({lineItem.price} per{" "}
            {lineItem.product.unitSize}-{lineItem.product.unitType})
          </span>
        </div>
      </td>
      <td className="is-vcentered">
        <div
          className="vertical-center"
          style={{ height: 20, justifyContent: "center" }}
        >
          {/* quantity */}
          {lineItem.quantity}
        </div>
      </td>
      <td className="is-vcentered">
        <div
          className="vertical-center"
          style={{ height: 20, justifyContent: "center" }}
        >
          <div>${lineItem.totalCost}</div>
        </div>
      </td>
    </tr>
  );
};

export default OrderHistoryItem;
