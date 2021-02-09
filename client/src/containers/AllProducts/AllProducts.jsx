import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  // load all cards and store them with setCard
  useEffect(() => {
    axios
      .get("/api/products")
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
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-2">
              <div className="columns is-mobile">
                <CategoriesCard />
              </div>
            </div>
            <div className="column is-10">
              <h3 className="title has-text-centered">Area for Search Bar</h3>
              <div className="columns is-mobile is-centered is-multiline">
                {products.map((product) => (
                  <ProductCard {...product} key={product._id} />
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
