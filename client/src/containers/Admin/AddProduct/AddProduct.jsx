import { useState } from "react";
import API from "../../../utils/API";

const units = [
  {
    value: "pounds",
    label: "pounds",
  },
  {
    value: "ounces",
    label: "ounces",
  },
  {
    value: "grams",
    label: "grams",
  },
  {
    value: "pints",
    label: "pints",
  },
];

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

const AddProduct = () => {
  const [unitType, setUnitType] = useState("pounds");
  const [category, setCategory] = useState("fruit");
  const [totalAmount, setTotalAmount] = useState(0);
  const [productObject, setProductObject] = useState({
    name: "",
    unitSize: 0,
    price: 0,
    quantity: 0,
    category: "",
    unitType: "",
    description: "",
  });

  const handleUnitChange = (event) => {
    setUnitType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTotalAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

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
      quantity: totalAmount / productObject.unitSize,
      category: category,
      unitType: unitType,
      description: productObject.description,
    })
      .then(() => {
        setTotalAmount(0);
        setProductObject({
          name: "",
          unitSize: 0,
          price: 0,
          quantity: 0,
          category: "",
          unitType: "",
          description: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="section">
      <form className="create-form">
        <div className="container has-text-centered">
          <div className="column is-half is-offset-one-quarter">
            <label className="label">Upload Photo</label>
            <label>Square, 1:1 format recommended.</label>
            <br />
            <div className="file has-name is-centered">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  name="img_path"
                  id="img_path"
                  accept=".jpeg,.JPEG,.png,.PNG,.jpg,.JPG"
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label" for="img_path">
                    {" "}
                    Choose a file…{" "}
                  </span>
                </span>
                <span className="file-name">No file chosen</span>
              </label>
            </div>
            <br />
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
                      onChange={handleCategoryChange}
                      value={category}
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
            </div>

            {/* description of the product */}

            <div className="field">
              <label className="label">Description</label>
              <div class="control">
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
              {/* The total amount of the product */}

              <div className="field">
                <label className="label">Total amount of units</label>
                <div className="control">
                  <input
                    className="input"
                    required
                    id="totalAmount"
                    min="1"
                    onChange={handleTotalAmountChange}
                    name="totalAmount"
                    value={totalAmount}
                    required
                    type="number"
                  />
                </div>
              </div>

              {/* The unit type the product will be sold by */}
              <div className="field is-inline-block">
                <label className="label">Unit Type</label>
                <div className="control">
                  <div className="select">
                    <select
                      id="unitType"
                      select
                      name="unitType"
                      label="Select Unit Type"
                      value={unitType}
                      onChange={handleUnitChange}
                    >
                      {units.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown">

            {/* The size of which each unit will be sold (Example: you buy strawberries by the pound in most places, but costco sells them in 3 pound boxes. So a "unit" is either 1 pound or 3 pounds respectively.) */}

            <div className="field">
              <label className="label">Units to Sell</label>
              <div className="control">
                <input
                  className="input"
                  required
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
                <span class="icon is-small is-left">
                  $
                </span>
                <input
                  className="input"
                  required
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
            </div>
    
            {/* This is the total number of "units" that are available to be sold. It is calculated for you as you enter the total amount of each product and the unit size to sell by. */}
 
            <div className="field">
                <div className="control">
                  <input
                    disabled
                    required
                    className="input"
                    type="number"
                    placeholder="Quantity*"
                    id="productName"
                    onChange={handleInputChange}
                    name="quantity"
                    value={totalAmount / productObject.unitSize}
                  />
                </div>
              </div>
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <button
                  type="submit"
                  className="button is-info is-medium"
                  id="submitBtn"
                  onClick={handleFormSubmit}
                >
                  Add Product
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
