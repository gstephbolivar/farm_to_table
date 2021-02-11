import { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import CategoriesCard from "../../../components/CategoriesCard/CategoriesCard";
import API from "../../../utils/API";
import {useHistory} from "react-router-dom"


const Products = () => {
    
    const [modal, setModal] = useState("modal");
    const [products, setProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");

    const history = useHistory();

  const handleEditButton = (id) => {
    let path = `/admin/edit/${id}`;
    history.push(path);
  };

  const handleModalState = () => {
    if(modal === "modal") { 
    setModal("modal is-active");
  } else {
    setModal("modal")
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
              <div className="columns is-centered is-multiline">
                {products.map((product) => (
                  <ProductCard {...product} editProduct={handleModalState} loadProducts={loadProducts} key={product._id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
          <div className={modal}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Modal title</p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success" onClick={handleModalState}>Save changes</button>
      <button className="button" onClick={handleModalState}>Cancel</button>
    </footer>
  </div>
</div>
</div>
</div>

    );
};


export default Products;
