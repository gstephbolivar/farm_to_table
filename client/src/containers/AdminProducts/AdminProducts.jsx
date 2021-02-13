import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import API from "../../utils/API";
// import {useHistory} from "react-router-dom";
import EditProductModal from "../../components/EditProductModal/EditProductModal";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import AddProductButtonCard from "../../components/AddProductButtonCard/AddProductButtonCard";

const Products = () => {
  const [productID, setProductID] = useState("");
  const [modal, setModal] = useState("modal");
  const [addProductModal, setAddProductModal] = useState("modal");
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState({})

  const handleModalState = (id) => {
    setProductID(id);
    if (modal === "modal") {
      setModal("modal is-active");
    } else {
      setModal("modal");
    }
  };

  const editProductInfo = (id) => {
    API.getOneProduct(id)
    .then((res) => {
      
    })
  }

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

  // FIXME: Remove duplicate routes
  const loadProducts = () => {
    API.getProduct()
      .then((response) => {
        //console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // sets the category filter
  const filterProducts = (e, item) => {
    const category = item;
    // console.log(e);
    //console.log(item);
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

  useEffect(() => {
    API.getProduct()
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
        <h3 className="title has-text-centered">
          Products Inventory - Add/Remove/Edit
        </h3>

        <div className="container">
          <div className="columns">
            <div className="column">
              <AddProductButtonCard
                handleAddProductModalState={handleAddProductModalState}
              />
              <br />
              <CategoriesCard onClick={filterProducts} />
            </div>
            <div className="column is-9">
              <div className="columns is-centered is-multiline">
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
