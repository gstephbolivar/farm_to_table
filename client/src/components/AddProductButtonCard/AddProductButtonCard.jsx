import React from "react";
import "./addProductsButtonCard.css";

const AddProductButtonCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media" id="card-container">
          <div className="media-content">
            <div className="field is-multiline has-text-centered is-vcentered">
              <figure className="image add-icon">
                <img src="./assets/icons/addproducts.svg" alt="fresh produce" />
              </figure>
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
    </div>
  );
};

export default AddProductButtonCard;
