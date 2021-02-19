import React from "react";

const OrderHistoryItem = ({ lineItem }) => {
  return (
    <tr>
      <td className="is-vcentered" key={lineItem.product._id}>
        <div className="vertical-center" style={{ padding: 10 }}>
          <img
            id="thumbnail"
            src={lineItem.product.pathway}
            alt="item description"
          />
          {lineItem.product.name}
          {/* <span>
            {props.lineItem.name} ({props.lineItem.price} per{" "}
            {props.lineItem.unitType})
          </span> */}
        </div>
      </td>
      <td className="is-vcentered">
        <div
          className="vertical-center"
          style={{ height: 55, justifyContent: "center" }}
        >
          {/* quantity */}
          {lineItem.quantity}
        </div>
      </td>
      <td className="is-vcentered">
        <div
          className="vertical-center"
          style={{ height: 55, justifyContent: "center" }}
        >
          <div>${lineItem.price} each</div>
        </div>
      </td>
      <td className="is-vcentered">
        <div
          className="vertical-center"
          style={{ height: 55, justifyContent: "center" }}
        >
          <div>${lineItem.totalCost}</div>
        </div>
      </td>
    </tr>
  );
};

export default OrderHistoryItem;
