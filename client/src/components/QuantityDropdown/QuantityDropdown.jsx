const QuantityDropdown = (props) => {
  const handleQuantityChange = (e) => {
    props.setDropDownState(parseInt(e.target.value));
  };

  return (
    <div className="select" id="quantityContainer">
      <select
        name="quantity"
        onChange={handleQuantityChange}
        id="qtySelect"
        value={props.dropDownState}
      >
        <option id="quantityDropdown">Quantity</option>
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
  );
};
export default QuantityDropdown;
