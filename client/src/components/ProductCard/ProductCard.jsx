import {useState} from "react";
import PropTypes from "prop-types";
// import {useHistory} from "react-router-dom"
import API from "../../utils/API";

const ProductCard = ({ name, quantity, price, _id, deleteProduct, editProduct}) => {

  // const history = useHistory();

  

  // const handleEditButton = (id) => {
  //   let path = `/admin/edit/${id}`;
  //   history.push(path);
  // };

  


  return (
    <div className="column is-4 has-text-centered" id="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src="https://placedog.net/300/300" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <div class="select is-rounded">
                <select>
                  <option>Quantity</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <p className="subtitle is-6">Price: {price}/unit</p>
            </div>
          </div>
          <footer className="card-footer">
            {/* only displays the buttons if the path is /admin */}
            {window.location.pathname === "/admin" && (
              <>
                <a onClick={editProduct} className="card-footer-item">
                  Edit
                </a>
                <a onClick={() => deleteProduct(_id)} className="card-footer-item">
                  Delete
                </a>
              </>
            )}
            {window.location.pathname === "/allproducts" && (
              <>
                <a href="#" className="card-footer-item">
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

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default ProductCard;
