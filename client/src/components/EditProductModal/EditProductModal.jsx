import { useState, useEffect } from "react";
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

const EditProductModal = (props) => {
  const [productObject, setProductObject] = useState({
    name: "",
    unitSize: 0,
    price: 0,
    quantity: 0,
    category: "",
    unitType: "",
    description: "",
  });

  useEffect(() => {
    
    API.getOneProduct(props.id).then((res) => {
      setProductObject({
        name: res.data.name,
        unitSize: res.data.unitSize,
        price: res.data.price,
        quantity: res.data.quantity,
        category: res.data.category,
        unitType: res.data.unitType,
        description: res.data.description,
      });
    });
  }, [props.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductObject({ ...productObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleModalState();
    API.updateProduct(props.id, {
      name: productObject.name,
      unitSize: productObject.unitSize,
      price: productObject.price,
      quantity: productObject.quantity,
      category: productObject.category,
      unitType: productObject.unitType,
      description: productObject.description,
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
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
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
                            id="selectCategoryEdit"
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

                    {/* the name of the product */}

                    <div className="field">
                      <label className="label">Product</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Strawberries"
                          id="productNameEdit"
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
                        multiline="true"
                        rows={2}
                        variant="outlined"
                        onChange={handleInputChange}
                        name="description"
                        value={productObject.description}
                      ></textarea>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Unit Type</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="pounds"
                        id="unitTypeEdit"
                        onChange={handleInputChange}
                        name="unitType"
                        value={productObject.unitType}
                      />
                    </div>
                  </div>

                  <div className="dropdown">
                    {/* The size of which each unit will be sold (Example: you buy strawberries by the pound in most places, but costco sells them in 3 pound boxes. So a "unit" is either 1 pound or 3 pounds respectively.) */}

                    <div className="field">
                      <label className="label">Unit Size to Sell</label>
                      <div className="control">
                        <input
                          className="input"
                          id="unitSizeEdit"
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
                          id="productPriceEdit"
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
                    <label className="label">Quantity</label>
                    <div className="control">
                      <input
                        required
                        className="input"
                        type="number"
                        placeholder="Total units (inventory)"
                        id="quantityEdit"
                        onChange={handleInputChange}
                        name="quantity"
                        value={productObject.quantity}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleFormSubmit}>
            Save changes
          </button>
          <button className="button" onClick={props.handleModalState}>
            Cancel
          </button>
        </footer>
      </div>
    </>
  );
};

export default EditProductModal;
