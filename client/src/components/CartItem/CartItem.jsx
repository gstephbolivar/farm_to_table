// import { PromiseProvider } from "mongoose";
import {useState} from "react";
import "./cartitem.css";

const CartItem = (props) => {

  const [valueState, setValueState] = useState(props.lineItem.quantity);

  const handleChange = (e) => {
    let value = e.target.value;
    setValueState(value); 
  }

  const calculateCost = (qty) => {
    const cost = props.lineItem.price * qty;
    const itemCost = Number(Math.round(cost + "e2") + "e-2");
    
    return itemCost;
  };

  const handleOnBlur = (e) => {

    let newQuantity = valueState === "" ? 0 : parseInt(valueState);
    let newCost = calculateCost(newQuantity);

    if (props.lineItem.inStock < newQuantity) {
      let warningMessage = "We are sorry but the quantity you are trying to order would exceed the amount that we have in stock.\n"
      warningMessage += `The maximum amount of units you can order at this time ${props.lineItem.inStock} units.`
      alert(warningMessage);
      newQuantity = props.lineItem.inStock;
      setValueState(newQuantity)
      newCost = calculateCost(newQuantity);
    }

    
    props.handleItemChange({...props.lineItem, quantity: newQuantity, totalCost: newCost}, true)
  }

  return (
    <tr>
      <td className="is-vcentered">
        <div className="vertical-center" style={{ padding: 10 }}>
          <img src={props.img} alt="item description" style={{ marginRight: 15 }} />
          <span>{props.lineItem.name}</span>
        </div>
      </td>
      <td className="is-vcentered">
        <div
          className="vertical-center"
          style={{ height: 95, justifyContent: "center" }}
        >
          <div><input type="number" value={valueState} onChange={handleChange} onBlur={handleOnBlur} name="quantity" style={{width: "50px", textAlign: "center"}} className="qtyInput"/></div>
        </div>
      </td>
      <td className="is-vcentered">
        <div
          className="vertical-center"
          style={{ height: 95, justifyContent: "center" }}
        >
          <div>${props.lineItem.price}</div>
        </div>
      </td>
      <td className="is-vcentered">
        <button className="button delBtn" onClick={(e) => props.deleteItem(props.lineItem.product)}>Remove</button>
      </td>
    </tr>
  );
};

export default CartItem;
