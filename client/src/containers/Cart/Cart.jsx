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
    <section class="section">
      <div className="container cart-container">
        <h1 className="title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="container">
            <div className="empty">
              <h2 className="title">Cart is empty.</h2>
            </div>
          </div>
        ) : (
          <>
            {/* SHOPPING CART TABLE */}
            <section className="hero has-text-centered" id="employee">
              <div className="table-container">
                <table class="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>
                        <div
                          className="vertical-center"
                          style={{
                            height: 95,
                            justifyContent: "left",
                            padding: 10,
                          }}
                        >
                          <h1 className="sub-title">Item</h1>
                        </div>
                      </th>
                      <th>
                        <div
                          className="vertical-center"
                          style={{ height: 95, justifyContent: "center" }}
                        >
                          <h1 className="sub-title">Quantity</h1>
                        </div>
                      </th>
                      <th>
                        <div
                          className="vertical-center"
                          style={{ height: 95, justifyContent: "center" }}
                        >
                          <h1 className="sub-title">Price</h1>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <CartItem {...item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <Grid container item xs={12}>
              <Grid item xs={10} align="right">
                <div
                  className="vertical-center"
                  style={{ width: 50, marginTop: 30 }}
                >
                  Subtotal:
                </div>
              </Grid>
              <Grid item xs={2}>
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
                <button className="cart-submit">Reserve</button>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
