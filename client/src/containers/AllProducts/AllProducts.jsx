import React from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";

const AllProducts = () => {
    return (
        <div>
            <h1>This is the page to view all products.</h1>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default AllProducts;