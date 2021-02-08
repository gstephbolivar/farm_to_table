import React from "react";




const ProductCard = () => {

  return (
    <div class='column is-4' id="column">
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src="https://placedog.net/300/300" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Product</p>
            <p className="subtitle is-6">Quantity</p>
            <p className="subtitle is-6">Price</p>
          </div>
        </div>
        <footer className="card-footer">
          {/* only displays the buttons if the path is /admin */}
          {window.location.pathname === "/admin" && (
            <>
              <a href="#" class="card-footer-item">
                Edit
              </a>
              <a href="#" class="card-footer-item">
                Delete
              </a>
            </>
          )}
          {window.location.pathname === "/allproducts" && (
            <>
              <a href="#" class="card-footer-item">
                Add
              </a>
            </>
          )}
        </footer>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
