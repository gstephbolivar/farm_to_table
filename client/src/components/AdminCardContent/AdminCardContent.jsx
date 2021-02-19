import React, {useState} from 'react';
import "./AdminCardContent.css";
import API from "../../utils/API";

const AdminCardContent = (props) => {

  const [deleteModal, setDeleteModal] = useState("modal");
  
  const handleDeleteModalState = () => {
    if (deleteModal === "modal") {
      setDeleteModal("modal is-active");
    } else {
      setDeleteModal("modal");
    }
  };

  const handleMakeOutOfSeason = () => {
    API.updateProduct(props._id, {category: "Out of Season"})
    .then(() => {
      handleDeleteModalState();
      props.loadProducts();
    })
    .catch((err) => {
      console.log(err);
    })
  }

    return (
      <>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title productTitle">{props.name}</p>
              <p className="subtitle productCategory">Category: {props.category}</p>
              <p className="subtitle productDesc">{props.description}</p>
              <p className="subtitle productDetails">${props.price} per {props.unitSize} {props.unitType}</p>
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
                  // onClick={props.handleDeleteButton}
                  onClick={handleDeleteModalState}
                  className="button card-footer-item deleteButton"
                >
                  Delete
                </button>
          </footer>
        </div>

<div className={deleteModal}>
<div className="modal-background"></div>
      <div className="modal-card is-mobile">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered add-product-headline">
            Delete Product
          </p>
          <button className="delete" aria-label="close" onClick={handleDeleteModalState} ></button>
        </header>
        <section className="modal-card-body">
          <p>Are you sure you want to delete this product from your inventory?</p>
          <br/>
          <p>If you think you will carry this product again please click "Out of Season", this will change the "category" so that the product will no longer display to customers.</p> 
          <br/>
          <p>When you are ready to display this product again in the future simply change the "category" back to normal.</p>
        </section>
        <footer className="modal-card-foot field is-grouped is-grouped-centered">
          <button
            className="button"
            onClick={props.handleDeleteButton}
          >
            Delete
          </button>
          <button
            className="button"
            onClick={handleMakeOutOfSeason}
          >
            Out of Season
          </button>
        </footer>
      </div>
</div>
</>
    );
};

export default AdminCardContent;