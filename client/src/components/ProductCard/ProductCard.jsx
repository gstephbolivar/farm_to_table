import { useState } from "react";
import PropTypes from "prop-types";
import API from "../../utils/API.js";
import UserCardContent from "../../components/UserCardContent/UserCardContent";
import AdminCardContent from "../../components/AdminCardContent/AdminCardContent";
import "./productCard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ _id, name, price, quantity, handleAddToCart, loadProducts, editProduct, unitSize, unitType, description, category, token, pathway }) => {

  const [lineItemState, setLineItemState] = useState({
    name: name,
    product: _id,
    quantity: 0,
    price: price,
    totalCost: 0,
    inStock: quantity,
    pathway: pathway,
    totalWeight: 0,
    unitSize: unitSize,
    unitType: unitType,
  });

  const [addedProductState, setAddedProductState] = useState(0);
  const [dropDownState, setDropDownState] = useState("Quantity");

  const calculateCost = (qty) => {
    const cost = lineItemState.price * qty;
    const itemCost = Number(Math.round(cost + "e2") + "e-2");
    
    return itemCost;
  };

  const calculateTotalWeight = (quantity) => {
    const weight = lineItemState.unitSize * quantity;
    console.log(weight);
    console.log(lineItemState.unitSize);
    console.log(quantity);
    return weight;
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
    let weight = calculateTotalWeight(dropDownState);

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
      totalCost: cost,
      totalWeight: weight,
    };
    
    setLineItemState({...lineItem});
    handleAddToCart(lineItem);
    setAddedProductState(addedProductState + lineItem.quantity);
    setDropDownState("Quantity");

    toast.success("Item Added", {hideProgressBar: true, autoClose: 1000});
  };

  return (
    <div className="column is-half-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd has-text-centered" id="column">
      <ToastContainer/>
      <div className="card" id="product-card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={process.env.PUBLIC_URL+pathway} alt={name} />
          </figure>
        </div>
        {/* content to be displayed to users */}
        {window.location.pathname === "/allproducts" && (
          <UserCardContent token={token} handleAddClick={handleAddClick} setDropDownState={setDropDownState} dropDownState={dropDownState} name={name} price={price} unitSize={unitSize} unitType={unitType} description={description} quantity={quantity}/>
        )}

        {/* content to be displayed to admin */}
        {window.location.pathname === "/admin" && (
          <AdminCardContent handleDeleteButton={handleDeleteButton} editProduct={editProduct} name={name} price={price} unitSize={unitSize} unitType={unitType} description={description} category={category} _id={_id} quantity={quantity}/>
        )}

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
