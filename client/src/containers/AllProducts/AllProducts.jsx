import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import Box from "@material-ui/core/Box";


const AllProducts = () => {
    
  return (
    <Box component="div">
      <h1>This is the page to view all products.</h1>
    <CategoriesCard/>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  );
};

export default AllProducts;
