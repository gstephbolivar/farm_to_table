import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

import Grid from "@material-ui/core/Grid";

import "./cart.css";
import CartContext from "../../utils/CartContext";
import API from "../../utils/API";

const Cart = (props) => {
  const { userId, lineItems } = useContext(CartContext);
  const history = useHistory();
  const items = lineItems;

  const routeChange = (path) => {
    history.push({
      pathname: path,
      state: {
        line: items,
        subTotal: subTotal,
      },
    });
  };

  const handleCartSubmit = () => {
    API.addLineItems(lineItems).then((res) => {
      API.placeOrder({
        customer: userId,
        LineItem: res.data.map((x) => x._id),
      }).then((order) => {
        localStorage.removeItem("lineItems");
        props.clearCart();
        API.getEmail(userId).then((result) => {
          API.sendConfirmationEmail({
            name: result.data.name,
            email: result.data.email,
            orderId: order.data._id
          })
        })
      });
    });

    routeChange("/confirmation");
  };

  const itemSum =
    lineItems.length > 0
      ? lineItems.reduce(
          (accumulator, current) => accumulator + current.totalCost,
          0,
          lineItems,
          0
        )
      : 0;
  const subTotal = Number(Math.round(itemSum + "e2") + "e-2");

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
            <section className="hero has-text-centered">
              <div className="table-container">
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>
                        <div
                          className="vertical-center"
                          style={{
                            height: 55,
                            justifyContent: "left",
                            padding: 10,
                          }}
                        >
                          <h1 className="sub-title">Item</h1>
                        </div>
                      </th>
                      <th className="is-vcentered">
                        <div
                          className="vertical-center"
                          style={{ height: 55, justifyContent: "center" }}
                        >
                          <h1 className="sub-title">Total Weight</h1>
                        </div>
                      </th>
                      <th className="is-vcentered">
                        <div
                          className="vertical-center"
                          style={{ height: 55, justifyContent: "center" }}
                        >
                          <h1 className="sub-title">Quantity</h1>
                        </div>
                      </th>
                      <th className="is-vcentered">
                        <div
                          className="vertical-center"
                          style={{ height: 55, justifyContent: "center" }}
                        >
                          <h1 className="sub-title">Price</h1>
                        </div>
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {lineItems.map((item, index) => (
                      <CartItem
                        lineItem={item}
                        img="https://placedog.net/75/75"
                        key={index}
                        handleItemChange={props.handleAddToCart}
                        deleteItem={props.deleteItemFromCart}
                        unitSize={item.unitSize}
                        unitType={item.unitType}
                      />
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
                  ${subTotal.toFixed(2)}
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
                <button
                  className="button cart-submit"
                  onClick={handleCartSubmit}
                >
                  Reserve
                </button>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
