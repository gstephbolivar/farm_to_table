import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import { Grid } from "@material-ui/core";
import axios from "axios";

// CSS styling

const useStyles = makeStyles({
  productContainer: {
    margin: "3rem auto",
    marginLeft: "3rem auto",
  },
});

const AllProducts = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

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

  const filterProducts = (e) => {
    const category = e.target.value;
    console.log(category);
    //setCategoryFilter();
  };

  return (
    <>
      <Grid container className={classes.productContainer}>
        <Grid item xs>
          <CategoriesCard onChange={filterProducts} />
        </Grid>
        {/* {card.map((products) => (
          <Grid key={card._id }item xs>
            <ProductCard />
          </Grid>
        ))} */}
        {products.map((product) => (
          <Grid item xs={3}>
            <ProductCard {...product} key={product._id} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllProducts;
