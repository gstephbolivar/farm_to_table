import React from "react";
import "./reserved.css";

const ReservedProducts = (props) => {
  return (
    <>
      {props.items.map((item, index) => (
       
        <div className="panel-block" key={index}>
          <figure className="is-vcentered">
            <img
              id="confirmationImage"
              src={item.pathway}
              alt="item thumbnail"
              width="50"
              height="50"
              // key={item.id}
            />
          </figure>
          <p id="item-reserved">{item.name}</p>
        </div>
      ))}
      <div className="panel-block">
        <h4 className="subtitle is-6" id="total-reserved">
          <strong>Total:</strong> ${props.total}
        </h4>
      </div>
    </>
  );
};

export default ReservedProducts;
