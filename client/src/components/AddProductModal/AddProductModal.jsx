import { useState } from "react";
import API from "../../utils/API";


const productType = [
  {
    value: "fruit",
    label: "fruit",
  },
  {
    value: "vegetable",
    label: "vegetable",
  },
  {
    value: "meat",
    label: "meat",
  },
  {
    value: "dairy",
    label: "dairy",
  },
];

const AddProductModal = (props) => {
  const [productObject, setProductObject] = useState({
    name: "",
    unitSize: 0,
    price: 0,
    quantity: 0,
    category: "fruit",
    unitType: "",
    description: "",
    totalAmount: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductObject({ ...productObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.addProduct({
      name: productObject.name,
      unitSize: productObject.unitSize,
      price: productObject.price,
      quantity: productObject.quantity,
      category: productObject.category,
      unitType: productObject.unitType,
      description: productObject.description,
      totalAmount: productObject.totalAmount,
    })
      .then(() => {
        setProductObject({
          name: "",
          unitSize: 0,
          price: 0,
          quantity: 0,
          category: "",
          unitType: "",
          description: "",
        });
        props.loadProducts();
        props.handleAddProductModalState();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Product</p>
      </header>
      <section class="modal-card-body">
    <section className="section">
      <form className="create-form">
        <div className="container has-text-centered">
          <div className="column is-half is-offset-one-quarter">
        
            <img
              title="Stock Image"
              src="https://www.placecage.com/c/250/250"
              alt="stock"
              height="auto"
            />
            <br />

            <div className="dropdown">
              {/* What kind of product it is */}

              <div className="field is-inline-block">
                <label className="label">Category</label>
                <div className="control">
                  <div className="select">
                    <select
                      id="selectCategory"
                      label="Select Type"
                      name="category"
                      onChange={handleInputChange}
                      value={productObject.category}
                    >
                      {productType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              </div>
              {/* the name of the product */}

              <div className="field">
                <label className="label">Product</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Strawberries"
                    id="productName"
                    onChange={handleInputChange}
                    name="name"
                    value={productObject.name}
                  />
                </div>
              </div>
            

            {/* description of the product */}

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="Organic Strawberries"
                  label="Product Description"
                  multiline
                  rows={2}
                  variant="outlined"
                  onChange={handleInputChange}
                  name="description"
                  value={productObject.description}
                ></textarea>
              </div>
            </div>

            <div className="dropdown">
              

              {/* The unit type the product will be sold by */}
              <div className="field is-inline-block">
                <label className="label">Unit Type</label>
                <div className="control">
                  <input className="input"                 
                      id="unitType"
                      required
                      name="unitType"
                      value={productObject.unitType}
                      onChange={handleInputChange}
                      type="text"
                    />                  
                  </div>
                </div>
              </div>
            </div>

            
              {/* The size of which each unit will be sold (Example: you buy strawberries by the pound in most places, but costco sells them in 3 pound boxes. So a "unit" is either 1 pound or 3 pounds respectively.) */}

              <div className="field">
                <label className="label">Unit Size to Sell</label>
                <div className="control">
                  <input
                    className="input"
                    id="unitSize"
                    min="1"
                    onChange={handleInputChange}
                    name="unitSize"
                    value={productObject.unitSize}
                    required
                    type="number"
                  />
                </div>
              </div>

              {/* the price at which each unit is sold per unit */}
              <div className="field">
                <label className="label">Price</label>
                <div className="control has-icons-left">
                  <span className="icon is-small is-left">$</span>
                  <input
                    className="input"
                    id="productPrice"
                    onChange={handleInputChange}
                    name="price"
                    value={productObject.price}
                    data-type="currency"
                    required
                    type="number"
                    step="0.01"
                  />
                </div>
              </div>
            

            {/* This is the total number of "units" that are available to be sold. It is calculated for you as you enter the total amount of each product and the unit size to sell by. */}

            <div className="field">
            <label className="label">Quantity(Total Units)</label>
              <div className="control">
                <input
                  required
                  className="input"
                  type="number"
                  placeholder="Total units (inventory)"
                  id="quantity"
                  onChange={handleInputChange}
                  name="quantity"
                  value={productObject.quantity}
                />
              </div>
            </div>
        </div>
      </form>
    </section>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" onClick={handleFormSubmit}>Save changes</button>
      <button class="button" onClick={props.handleAddProductModalState}>Cancel</button>
    </footer>
  </div>
</>
  );
};

export default AddProductModal;