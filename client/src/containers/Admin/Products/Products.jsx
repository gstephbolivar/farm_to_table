import { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import CategoriesCard from "../../../components/CategoriesCard/CategoriesCard";
import API from "../../../utils/API";
// import {useHistory} from "react-router-dom";
import EditProductModal from "../../../components/EditProductModal/EditProductModal";
import AddProductModal from "../../../components/AddProductModal/AddProductModal";
import AddProductButtonCard from "../../../components/AddProductButtonCard/AddProductButtonCard";

const Products = () => {
<<<<<<< HEAD
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  // load all cards and store them with setCard
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    API.getProduct()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // sets the category filter to state
  const filterProducts = (e) => {
    const category = e.target.name;
    if (category !== "All") {
      // filters the products displayed based on the category
      displayFilteredProducts(category);
      console.log(category);
      setCategoryFilter(category);
    }
    // if All category is chosen, resets the filter
    else loadProducts();
  };

  const displayFilteredProducts = (category) => {
    API.getAllProducts()
      .then((response) => {
        const filteredProducts = response.data.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
        console.log(categoryFilter);
        console.log(response.data);
        console.log(filteredProducts);
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteButton = (id) => {
    API.deleteProduct(id)
      .then((res) => loadProducts())
      .catch((err) => console.log(err));
  };

=======
    
    const [productID, setProductID] = useState("");
    const [modal, setModal] = useState("modal");
    const [addProductModal, setAddProductModal] = useState("modal");
    const [products, setProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [productToEdit, setProductToEdit] = useState({});
    

  const handleModalState = (id) => {
    setProductID(id);
    if(modal === "modal") { 
        setModal("modal is-active");
  } else {
    setModal("modal")
  }
};

const handleAddProductModalState = () => {
  if(addProductModal === "modal") { 
    setAddProductModal("modal is-active");
} else {
  setAddProductModal("modal")
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
          console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // sets the category filter to state
  const filterProducts = (e) => {
    const category = e.target.name;
    if (category !== "All") {
      // filters the products displayed based on the category
      displayFilteredProducts(category);
      console.log(category);
      setCategoryFilter(category);
    }
    // if All category is chosen, resets the filter
    else loadProducts();
  };
  // FIXME: Remove dupicate routes
  const displayFilteredProducts = (category) => {
    // FIXME: Pass the category to a route on the back end
    API.getAllProducts()
      .then((response) => {
        const filteredProducts = response.data.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
        console.log(categoryFilter);
        console.log(response.data);
        console.log(filteredProducts);
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err));
  };

>>>>>>> 4acd7800e8dc1ad58eacbd7465d0339f2ea1d7be
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
          This will be where you can view all products. Admin side.
        </h3>

        <div className="container">
          <div className="columns">
            <div className="column">
              <CategoriesCard onClick={filterProducts} />
            </div>
            <div className="column is-9">
            <AddProductButtonCard handleAddProductModalState={handleAddProductModalState}/>

              <div className="columns is-centered is-multiline">
                {products.map((product) => (
<<<<<<< HEAD
                  <ProductCard
                    {...product}
                    deleteProduct={handleDeleteButton}
                    key={product._id}
                  />
=======
                  <ProductCard {...product} editProduct={handleModalState} loadProducts={loadProducts} key={product._id}/>
>>>>>>> 4acd7800e8dc1ad58eacbd7465d0339f2ea1d7be
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </div>
  );
=======
      <div>
        {/* edit modal */}
          <div className={modal}>
    <EditProductModal handleModalState={handleModalState} loadProducts={loadProducts} id={productID}/>
          </div>
          {/* add modal */}
          <div className={addProductModal}>
    <AddProductModal handleAddProductModalState={handleAddProductModalState} loadProducts={loadProducts}/>
          </div>
      </div>
</div>

    );
>>>>>>> 4acd7800e8dc1ad58eacbd7465d0339f2ea1d7be
};


export default Products;
