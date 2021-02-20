import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import API from "../../utils/API";
import OutOfSeasonCategory from "../../components/OutOfSeasonCategory/OutOfSeasonCategory";
import EditProductModal from "../../components/EditProductModal/EditProductModal";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import AddProductButtonCard from "../../components/AddProductButtonCard/AddProductButtonCard";
import "./adminProducts.css";

const Products = () => {
  const [productID, setProductID] = useState("");
  const [modal, setModal] = useState("modal");
  const [addProductModal, setAddProductModal] = useState("modal");
  const [products, setProducts] = useState([]);

  const handleModalState = (id) => {
    setProductID(id);
    if (modal === "modal") {
      setModal("modal is-active");
    } else {
      setModal("modal");
    }
  };

  const handleAddProductModalState = () => {
    if (addProductModal === "modal") {
      setAddProductModal("modal is-active");
    } else {
      setAddProductModal("modal");
    }
  };

  // load all cards and store them with setCard
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    API.getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // sets the category filter
  const filterProducts = (e, item) => {
    const category = item;

    if (category !== "All") {
      // filters the products displayed based on the category
      displayFilteredProducts(category);
    }
    // if All category is chosen, resets the filter
    else loadProducts();
  };

  const displayFilteredProducts = (category) => {
    // pass category to a route on the backend
    API.getFilteredProducts(category.toLowerCase())
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleOutOfSeasonClick = () => {
    API.getFilteredProducts("Out of Season")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    API.getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-9">
              <div className="columns is-centered is-multiline">
                <img
                  src="./assets/icons/headline_left.svg"
                  className="figure-img img-fluid rounded"
                  id="signUp-icon-2"
                  alt="tomato and pear icon"
                />
                <h3 className="title has-text-centered inventory-headline">
                  Current Inventory
                </h3>
                <img
                  src="./assets/icons/headline_right.svg"
                  className="figure-img img-fluid rounded"
                  id="signUp-icon-2"
                  alt="tomato and pear icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
              <AddProductButtonCard
                handleAddProductModalState={handleAddProductModalState}
              />
              <br />
              <CategoriesCard onClick={filterProducts} />
              <br />
              <OutOfSeasonCategory
                handleOutOfSeasonClick={handleOutOfSeasonClick}
              />
            </div>
            <div className="column is-9">
              <div className="columns is-centered is-multiline is-mobile is-tablet is-desktop is-fullhd">
                {products.map((product) => (
                  <ProductCard
                    {...product}
                    editProduct={handleModalState}
                    loadProducts={loadProducts}
                    key={product._id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* edit modal */}
        <div className={modal}>
          <EditProductModal
            handleModalState={handleModalState}
            loadProducts={loadProducts}
            id={productID}
          />
        </div>
        {/* add modal */}
        <div className={addProductModal}>
          <AddProductModal
            handleAddProductModalState={handleAddProductModalState}
            loadProducts={loadProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
