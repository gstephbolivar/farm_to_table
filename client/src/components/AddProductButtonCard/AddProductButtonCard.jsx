import React from "react";
import "./addProductsButtonCard.css";

const AddProductButtonCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media" id="card-container">
          <div className="media-content is-grouped">
            <img
              className="add-icon vertical-center-add"
              src="./assets/icons/addproducts.svg"
              alt="multiple produce products"
            />
            <button
              className="button"
              id="addProductBtn"
              onClick={props.handleAddProductModalState}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductButtonCard;
