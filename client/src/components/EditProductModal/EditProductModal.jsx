import { useState, useEffect } from "react";
import API from "../../utils/API";


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

const EditProductModal = (props) => {


  const [modalID, setModalID] = useState(props.id);
  const [unitType, setUnitType] = useState("pounds");
  const [category, setCategory] = useState("fruit");
  const [productObject, setProductObject] = useState({
    name: "",
    unitSize: 0,
    price: 0,
    quantity:0,
    category: "",
    unitType: "",
    description: "",
    totalAmount: 0,
  });


  useEffect(() => {
    API.getOneProduct(props.id).then((res) => {
      console.log(res);
      setProductObject({
        name: res.data.name,
        unitSize: res.data.unitSize,
        price: res.data.price,
        quantity: res.data.quantity,
        category: res.data.category,
        unitType: res.data.unitType,
        description: res.data.description,
        totalAmount: res.data.totalAmount,
      });
    });
  }, [props.id]);

  const handleUnitChange = (event) => {
    setUnitType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductObject({ ...productObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleModalState();
    console.log(productObject);
    API.updateProduct(props.id, {
      name: productObject.name,
      unitSize: productObject.unitSize,
      price: productObject.price,
      quantity: productObject.totalAmount / productObject.unitSize,
      category: productObject.category,
      unitType: productObject.unitType,
      description: productObject.description,
      totalAmount: productObject.totalAmount,
    })
      .then(() => {
        props.handleModalState();
        props.loadProducts();
        setProductObject({
          name: "",
          unitSize: 0,
          price: 0,
          quantity: 0,
          category: "",
          unitType: "",
          description: "",
          totalAmount: "",
        });
      })
      .catch((err) => console.log(err));
  };

    return (
    
    <>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
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
                      onChange={handleCategoryChange}
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
              {/* The total amount of the product */}

              <div className="field">
                <label className="label">Total amount</label>
                <div className="control">
                  <input
                    className="input"
                    required
                    id="totalAmount"
                    min="1"
                    onChange={handleInputChange}
                    name="totalAmount"
                    value={productObject.totalAmount}
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
                      value={productObject.unitType}
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
            </div>

            {/* This is the total number of "units" that are available to be sold. It is calculated for you as you enter the total amount of each product and the unit size to sell by. */}

            <div className="field">
              <div className="control">
                <input
                  disabled
                  required
                  className="input"
                  type="number"
                  placeholder="Total units (inventory)"
                  id="totalUnits"
                  onChange={handleInputChange}
                  name="quantity"
                  value={productObject.totalAmount / productObject.unitSize}
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

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" onClick={handleFormSubmit}>Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</>
    );
};

export default EditProductModal;