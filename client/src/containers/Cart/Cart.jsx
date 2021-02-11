import {useContext} from "react";
import CartItem from "../../components/CartItem/CartItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "./cart.css";
import CartContext from '../../utils/CartContext';
import API from '../../utils/API';
import axios from 'axios';

const Cart = () => {

  const {userId, lineItems} = useContext(CartContext);

  const handleCartSubmit = () => {
      API.addLineItems(lineItems)
      .then(res => {
          API.placeOrder({customer: userId, LineItem: res.data.map(x => x._id)})
            .then(() => {
                alert("Order successfully placed");
                localStorage.removeItem("lineItems");
            })
      })
  }

  const subTotal = lineItems.length > 0 ? lineItems.reduce((accumulator, current) => accumulator + current.totalCost, 0, lineItems, 0) : 0;

  return (
    <section className="section">
      <div className="container cart-container">
        <h1 className="title">Shopping Cart</h1>

        {lineItems.length === 0 ? (
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
                <table className="table is-fullwidth">
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
                    {lineItems.map((item, index) => (
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
                  ${subTotal}
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
                <button className="cart-submit" onClick={handleCartSubmit}>Reserve</button>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
