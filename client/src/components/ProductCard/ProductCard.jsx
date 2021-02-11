import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import QuantityDropdown from '../QuantityDropdown/QuantityDropdown';

const ProductCard = ({ _id, name, price, quantity, handleAddToCart }) => {

  const [lineItemState, setLineItemState] = useState({
    product: _id,
    quantity: 0,
    price: price,
    totalCost: 0,
  })

  const [tempItem, setTempItem] = useState({
    quantity: 0,
    price: price,
    totalCost: 0
  });

  const calculateCost = (qty) => {
    const price = tempItem.price;
    const cost = price * qty;
    const totalCost = Number(Math.round(cost +'e2') +'e-2')
    return totalCost;
  }

  const handleAddClick = (e) => {
    e.preventDefault(); 

    let newQuantity = tempItem.quantity;
    let newCost = tempItem.totalCost;
  
  
    if(quantity < tempItem.quantity)
    {
      newQuantity = quantity;
      newCost = calculateCost(newQuantity);
      alert(`We are sorry but there are only ${quantity} left in stock.`)
      setTempItem({...tempItem, quantity: newQuantity, totalCost: newCost})
      return;
    
    }

    const lineItem = {...lineItemState, quantity: newQuantity, totalCost: newCost}

    setLineItemState(lineItem);
    handleAddToCart(lineItem);
  }

  return (
    <div className="column is-4" id="column">
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
              <QuantityDropdown setTempItem = {setTempItem} tempItem={tempItem} calculateCost={calculateCost}/>
              <p className="subtitle is-6">Price: {price}/unit</p>
            </div>
          </div>
          <footer className="card-footer">
            {/* only displays the buttons if the path is /admin */}
            {window.location.pathname === "/admin" && (
              <>
                <a href="#" className="card-footer-item">
                  Edit
                </a>
                <a href="#" className="card-footer-item">
                  Delete
                </a>
              </>
            )} 
            {window.location.pathname === "/allproducts" && (
              <>
              {quantity === 0 ? 
                <div  className="card-footer-item">
                Out of Stock
                </div>:  
                <a href="#" className="card-footer-item" onClick={handleAddClick}>
                    Add
                </a>
              }
               
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
