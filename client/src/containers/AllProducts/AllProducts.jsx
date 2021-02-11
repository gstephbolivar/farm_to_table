import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import axios from "axios";
import API from "../../utils/API";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");

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

  return (
    <div>
      <section className="section">
      <h3 className="title has-text-centered">Headline Text (if needed)</h3>

        <div className="container">
          <div className="columns">
            <div className="column">
                <CategoriesCard onClick={filterProducts} />
            </div>
            <div className="column is-9">
              <div className="columns is-centered is-multiline">
                {products.map((product) => (
                  <ProductCard {...product} key={product._id} handleAddToCart={props.handleAddToCart} totalQuantity={product.quantity}/>
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
