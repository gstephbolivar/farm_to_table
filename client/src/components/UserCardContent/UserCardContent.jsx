import React from 'react';
import QuantityDropdown from "../QuantityDropdown/QuantityDropdown";

const UserCardContent = (props) => {
    return (
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title productTitle">{props.name}</p>
              <p className="subtitle productDetails">${props.price} per {props.unitSize}-{props.unitType}</p>
              <p className="subtitle productDesc">{props.description}</p>
              <QuantityDropdown
                dropDownState = {props.dropDownState}
                setDropDownState = {props.setDropDownState}
              />
              {props.quantity < 5 && (
                <p className="subtitle productQuantity">{props.quantity} left in stock</p>
              )}
            </div>
          </div>
          <footer className="card-footer">
                {props.quantity === 0 ? (
                  <div className="card-footer-item">Out of Stock</div>
                ) : (
                  <button
                    href="#"
                    className="button card-footer-item"
                    onClick={props.handleAddClick}
                  >
                    Add
                  </button>
                )}
          </footer>
        </div>
    );
};

export default UserCardContent;