import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import API from "../../utils/API";
import "./products.css";


const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  // load all cards and store them with setCard
  useEffect(() => {
    loadProducts();
  }, []);

  // loads all products from the database
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

  return (
    <div>
      <section className="section">


      <div className="container">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-9">
              <div className="columns is-centered is-multiline">
                <h3 className="title has-text-centered products-headline">
                  Shop Our Seasonal Products
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
              <CategoriesCard onClick={filterProducts} />
            </div>
            <div className="column is-9">
              <div className="columns is-centered is-multiline">
                {products.map((product) => (
                  <ProductCard
                    {...product}
                    key={product._id}
                    handleAddToCart={props.handleAddToCart}
                    totalQuantity={product.quantity}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
