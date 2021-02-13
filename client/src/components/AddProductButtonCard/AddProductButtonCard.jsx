import React from 'react';

const AddProductButtonCard = (props) => {
    return (
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Add Product</p>
                  
                </div>
              </div>
              <footer className="card-footer">
                <button onClick={props.handleAddProductModalState}>Add Product</button>
              </footer>
            </div>
          </div>
      );
};

export default AddProductButtonCard;