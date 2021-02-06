import React from 'react';
import ProductCard from "../../../components/ProductCard/ProductCard";


const Products = () => {
    return (
        <div>
           <h1>This will be where you can view all products. Admin side. </h1>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> 
        </div>
    );
};

export default Products;