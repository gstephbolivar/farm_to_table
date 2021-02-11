import { useEffect } from "react";

const QuantityDropdown = (props) => {

    useEffect(() => {

    }, [props.quantity])

    const handleQuantityChange = (e) => {
        const qty = parseInt(e.target.value);
        const totalCost = props.calculateCost(qty);
    
        props.setTempItem({...props.tempItem, quantity: qty, totalCost});
      }

    return(
        <div className="select is-rounded">
        <select name="quantity" onChange={handleQuantityChange} id="qtySelect" value={props.tempItem.quantity}>
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
    )
}

export default QuantityDropdown;