import React from 'react';
import QuantityDropdown from "../QuantityDropdown/QuantityDropdown";
import "./UserCardContent.css";
import {Link} from "react-router-dom";

const UserCardContent = (props) => {

const buttonsToShow = () => {
  if(props.quantity < 1 && props.token !== "") {
    return <div className="card-footer-item">Out of Stock</div>;
  } else if (props.token !== "" && props.quantity > 0) {
    return <button
    href="#"
    className="button card-footer-item hvr-fade-add"
    onClick={props.handleAddClick}
  >
    Add
  </button>;
  } else if (props.token === "" && props.quantity < 1){
    return <div className="card-footer-item">Out of Stock</div>;
  } else if (props.token === ""){
    return <Link
    to="/login"
    className="button card-footer-item"
  >
    Login to Add
  </Link>; 
  };
};

    return (
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title productTitle">{props.name}</p>
              <p className="subtitle productDetails">${props.price} per {props.unitSize} {props.unitType}</p>
              <p className="subtitle productDesc">{props.description}</p>
              <QuantityDropdown
                dropDownState = {props.dropDownState}
                setDropDownState = {props.setDropDownState}
              />
              {(props.quantity > 0 && props.quantity < 6) && (
                <p className="subtitle productQuantity">{props.quantity} left in stock</p>
              )}
            </div>
          </div>
          <br/>
          <footer className="card-footer" id="product-card-footer">
                {buttonsToShow()}
          </footer>
        </div>
    );
};

export default UserCardContent;