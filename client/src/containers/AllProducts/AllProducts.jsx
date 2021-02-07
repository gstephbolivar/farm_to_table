import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import { Box, Grid } from "@material-ui/core";

// CSS styling

const useStyles = makeStyles({
  productContainer: {
    margin: "3rem auto",
    marginLeft: "3rem auto",
  },
});

const AllProducts = () => {
  const classes = useStyles();
  const [card, setCard] = useState([]);
  return (
    <>
     
      <Grid container className= {classes.productContainer}>
        <Grid item xs>
          <CategoriesCard />
        </Grid>
        
        <Grid item xs>
          <ProductCard />
        </Grid>
      </Grid>
      
    </>
  );
};

export default AllProducts;
