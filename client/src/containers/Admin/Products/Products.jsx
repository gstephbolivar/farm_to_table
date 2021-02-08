import React from 'react';
import ProductCard from "../../../components/ProductCard/ProductCard";


const Products = () => {
    return (

        <div>
        <section className="section">
          <div className="container has-text-centered">
            <h1>This will be where you can view all products. Admin side.</h1>
            <div className="columns is-centered is-multiline">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/> 
            </div>
          </div>
        </section>
      </div>
    );
};

export default Products;