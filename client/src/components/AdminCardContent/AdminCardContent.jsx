import React from 'react';
import "./AdminCardContent.css";

const AdminCardContent = (props) => {
    return (
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title productTitle">{props.name}</p>
              <p className="subtitle productCategory">Category: {props.category}</p>
              <p className="subtitle productDesc">{props.description}</p>
              <p className="subtitle productDetails">${props.price} per {props.unitSize}-{props.unitType}</p>
              <p className="subtitle productQuantity">Current Inventory: {props.quantity}</p>
            </div>
          </div>
          <br />
          <footer className="card-footer" id="product-card-footer">
                <button
                  onClick={() => props.editProduct(props._id)}
                  className="button card-footer-item editButton"
                >
                  Edit
                </button>
                <button
                  onClick={props.handleDeleteButton}
                  className="button card-footer-item deleteButton"
                >
                  Delete
                </button>
          </footer>
        </div>
    );
};

export default AdminCardContent;