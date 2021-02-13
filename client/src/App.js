import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Home from "./containers/Home/Home.jsx";
import AllProducts from "./containers/AllProducts/AllProducts.jsx";
import Cart from "./containers/Cart/Cart.jsx";
import Confirmation from "./containers/Confirmation/Confirmation";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import OneProduct from "./containers/OneProduct/OneProduct";
import AdminProducts from "./containers/AdminProducts/AdminProducts";
import CssBaseLine from "@material-ui/core/CssBaseline";
import BulmaNavBar from "./components/NavBar/BulmaNavBar.jsx";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartContext from "./utils/CartContext";

function App() {
  const [token, setToken] = useState("");

  const [cartState, setCartState] = useState({
    userId: localStorage.getItem("userId")
      ? localStorage.getItem("userId")
      : "",
    lineItems: localStorage.getItem("lineItems")
      ? JSON.parse(localStorage.getItem("lineItems"))
      : [],
  });

  const setUserId = (id) => {
    const localId = localStorage.getItem("userId");

    if (localId && localId !== cartState.userId) {
      localStorage.setItem("userId", id);
      setCartState({ ...cartState, userId: id });
    } else {
      localStorage.setItem("userId", id);
      setCartState({ ...cartState, userId: id });
    }
  };

  const handleAddToCart = (item, cartEdit) => {
    let tempItems = cartState.lineItems;

    if (
      tempItems
        .map((x) => x.product.toString())
        .includes(item.product.toString())
    ) {
      const existingLineItem = tempItems.find(
        (x) => x.product.toString() === item.product.toString()
      );
      if (cartEdit) {
        existingLineItem.quantity = item.quantity;
        existingLineItem.totalCost = item.totalCost;
      } else {
        existingLineItem.quantity += item.quantity;
        existingLineItem.totalCost += item.totalCost;
      }
    } else {
      tempItems.push(item);
    }
    localStorage.setItem("lineItems", JSON.stringify(tempItems));
    setCartState({ ...cartState, lineItems: tempItems });
  };

  const clearCart = () => {
    setCartState({ ...cartState, lineItems: [] });
  };

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={cartState}>
          <BulmaNavBar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/allproducts"
              render={(props) => (
                <AllProducts {...props} handleAddToCart={handleAddToCart} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => <Cart {...props} clearCart={clearCart} />}
            />
            <Route path="/confirmation" component={Confirmation} />
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} setUserId={setUserId} setToken={setToken} />
              )}
            />
            <Route path="/signup" component={SignUp} />
            <Route path="/oneproduct" component={OneProduct} />
            <ProtectedRoute
              exact
              path="/admin"
              component={AdminProducts}
              token={token}
            />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
