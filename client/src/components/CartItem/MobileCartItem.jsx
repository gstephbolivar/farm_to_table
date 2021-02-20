import { useState } from "react";
import "./cartitem.css";

const MobileCartItem = (props) => {
  const [valueState, setValueState] = useState(props.lineItem.quantity);
  const handleChange = (e) => {
    let value = e.target.value;
    setValueState(value);
  };

  const calculateCost = (qty) => {
    const cost = props.lineItem.price * qty;
    const itemCost = Number(Math.round(cost + "e2") + "e-2");

    return itemCost;
  };

  const handleOnBlur = (e) => {
    let newQuantity = valueState === "" ? 0 : parseInt(valueState);
    let newCost = calculateCost(newQuantity);

    if (props.lineItem.inStock < newQuantity) {
      let warningMessage =
        "We are sorry but the quantity you are trying to order would exceed the amount that we have in stock.\n";
      warningMessage += `The maximum amount of units you can order at this time ${props.lineItem.inStock} units.`;
      alert(warningMessage);
      newQuantity = props.lineItem.inStock;
      setValueState(newQuantity);
      newCost = calculateCost(newQuantity);
    }

    props.handleItemChange(
      { ...props.lineItem, quantity: newQuantity, totalCost: newCost },
      true
    );
  };

  return (
    <div className="mobile-cart-item">
      <div className="flex-row">
        <div className="flex-col">
          <div className="flex-row">
            <img
              className="mobile-thumbnail"
              src={props.lineItem.pathway}
              alt="item description"
            />
            <span>
              {props.lineItem.name} (${props.lineItem.price}/
              {props.lineItem.unitType})
            </span>
          </div>
          <div className="flex-row">
            <div className="half">
              <label>Quantity: </label>
              <input
                type="number"
                value={valueState}
                onChange={handleChange}
                onBlur={handleOnBlur}
                name="quantity"
                style={{ width: "50px", textAlign: "center" }}
                className="qtyInput"
              />
            </div>
            <div className="half">
              <label>Total Cost: </label>${props.lineItem.totalCost.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="mobile-remove">
          <button
            className="button delBtn hvr-fade-remove"
            onClick={(e) => props.deleteItem(props.lineItem.product)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCartItem;
