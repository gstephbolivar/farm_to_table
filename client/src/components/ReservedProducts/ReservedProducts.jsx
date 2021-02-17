import React from "react";
import "./reserved.css";

const ReservedProducts = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <p class="panel-block">
          <figure class="is-vcentered">
            <img
              id="confirmationImage"
              src={item.pathway}
              alt="item thumbnail"
              width="50"
              height="50"
            />
          </figure>
          <p id="item-reserved">{item.name}</p>
        </p>
      ))}
      <p class="panel-block">
        <h4 class="subtitle is-6" id="total-reserved">
          <strong>Total:</strong> {props.total}
        </h4>
      </p>
    </>
  );
};

export default ReservedProducts;
