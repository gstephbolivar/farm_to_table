import React from 'react';

const AdminCardContent = (props) => {
    return (
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6">Category: {props.category}</p>
              <p className="subtitle is-6">{props.description}</p>
              <p className="subtitle is-6">${props.price} per {props.unitSize}-{props.unitType}</p>
              <p className="subtitle is-6">Current Inventory: {props.quantity}</p>
            </div>
          </div>
          <footer className="card-footer">
                <button
                  onClick={() => props.editProduct(props._id)}
                  className="card-footer-item"
                >
                  Edit
                </button>
                <button
                  onClick={props.handleDeleteButton}
                  className="card-footer-item"
                >
                  Delete
                </button>
          </footer>
        </div>
    );
};

export default AdminCardContent;