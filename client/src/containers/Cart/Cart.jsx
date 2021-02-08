import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "./cart.css";

const Cart = () => {
  const cartItems = [];
  for (var i = 0; i < 5; i++) {
    let item = {
      img: "https://via.placeholder.com/75",
      name: "Juicy, red large strawberries",
      quantity: 5,
      price: 10.99,
    };
    cartItems.push(item);
  }

  return (

  //   <div>
  //   <section class="section">
  //     <div class="container has-text-centered">
  //       <h1 id="portfolioHeadline">Shopping Cart</h1>
  //       <div class="columns is-centered is-multiline">

  //       </div>
  //     </div>
  //   </section>
  // </div>









      <div className="container cart-container">

      <Grid item xs={12}>
        <Typography variant="h3">Shopping Cart</Typography>
      </Grid>

      {cartItems.length === 0 ? (
        <Grid item align="center" xs={12}>
            <div className="empty">
                <h2>Cart is empty.</h2>
            </div>         
        </Grid>
   
      ) : (
        <>
          <Grid container item className="cart-headers">
            <Grid item xs={6} style={{ paddingLeft: 10 }}>
              Item
            </Grid>
            <Grid item xs={3} align="center">
              Quantity
            </Grid>
            <Grid item xs={3} align="center">
              Price
            </Grid>
          </Grid>

          {cartItems.map((item, index) => (
            <CartItem {...item}/>
          ))}

          <Grid container item xs={12}>
            <Grid item xs={9} align="right">
              <div
                className="vertical-center"
                style={{ width: 50, marginTop: 30}}
              >
                Subtotal:
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                className="vertical-center"
                style={{ justifyContent: "center", marginTop: 30 }}
              >
                $10.99
              </div>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              item
              xs={3}
              style={{ marginLeft: "auto", marginTop: 40 }}
              align="center"
            >
              <Button className="cart-submit">Reserve</Button>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Cart;
