import { useState } from "react";
import PropTypes from "prop-types";
import QuantityDropdown from "../QuantityDropdown/QuantityDropdown";
import API from "../../utils/API.js";
import {Link} from "react-router-dom";

const ProductCard = ({ _id, name, price, quantity, handleAddToCart, loadProducts, editProduct, unitSize, unitType, description }) => {

  const [lineItemState, setLineItemState] = useState({
    name: name,
    product: _id,
    quantity: 0,
    price: price,
    totalCost: 0,
    inStock: quantity
  });

  const [addedProductState, setAddedProductState] = useState(0);
  const [dropDownState, setDropDownState] = useState("Quantity");

  const calculateCost = (qty) => {
    const cost = lineItemState.price * qty;
    const itemCost = Number(Math.round(cost + "e2") + "e-2");
    
    return itemCost;
  };

  const handleDeleteButton = () => {
    API.deleteProduct(_id)
      .then((res) => loadProducts())
      .catch((err) => console.log(err));
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (dropDownState === "Quantity") {
      return;
    }

    let cost = calculateCost(dropDownState);

    if (quantity < addedProductState + dropDownState) {
      const maxCanOrder = quantity - addedProductState;
      let warningMessage = "We are sorry but the quantity you are trying to order would exceed the amount that we have in stock.\n"
      warningMessage += `The maximum amount of units you can order at this time ${maxCanOrder} units.`
      alert(warningMessage);
      setDropDownState(maxCanOrder)
      return;
    }

    const lineItem = {
      ...lineItemState,
      quantity: dropDownState,
      totalCost: cost
    };
    
    setLineItemState({...lineItem});
    handleAddToCart(lineItem);
    setAddedProductState(addedProductState + lineItem.quantity);
    setDropDownState("Quantity");
  };

  return (
    <div className="column is-4 has-text-centered" id="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src="https://placedog.net/300/300" alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">${price} per {unitSize}-{unitType}</p>
              <p className="subtitle is-6">{description}</p>
              <p className="subtitle is-6">How many would you like?</p>
              <QuantityDropdown
                dropDownState = {dropDownState}
                setDropDownState = {setDropDownState}
              />
            </div>
          </div>
          <footer className="card-footer">
            {/* only displays the buttons if the path is /admin */}
            {window.location.pathname === "/admin" && (
              <>
                <button
                  onClick={() => editProduct(_id)}
                  className="button card-footer-item"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteButton}
                  className="button card-footer-item"
                >
                  Delete
                </button>
              </>
            )}
            {window.location.pathname === "/allproducts" && (
              <>
                {quantity === 0 ? (
                  <div className="card-footer-item">Out of Stock</div>
                ) : (
                  <button
                    href="#"
                    className="card-footer-item"
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                )}
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
  // loadProducts: PropTypes.func.isRequired,
};

export default ProductCard;
