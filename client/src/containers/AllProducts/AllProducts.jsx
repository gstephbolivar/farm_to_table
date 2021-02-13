import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import API from "../../utils/API";

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

  // sets the category filter to state
  const filterProducts = (e) => {
    const category = e.target.name;
    if (category !== "All") {
      // filters the products displayed based on the category
      displayFilteredProducts(category);

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
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err));
  };


  // // sets the category filter to state
  // const filterProducts = (e, item) => {
  //   const category = item;
  //   // console.log(e);
  //   console.log(item);
  //   if (category !== "All") {
  //     // filters the products displayed based on the category
  //     displayFilteredProducts(category);
  //   }
  //   // if All category is chosen, resets the filter
  //   else loadProducts();
  // };

  // const displayFilteredProducts = (category) => {
  //   // pass category to a route on the backend
  //   API.getFilteredProducts(category.toLowerCase())
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

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