import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Home from "./containers/Home/Home.jsx";
import AllProducts from "./containers/AllProducts/AllProducts.jsx";
import Cart from "./containers/Cart/Cart.jsx";
import Confirmation from "./containers/Confirmation/Confirmation";
import Contact from "./containers/Contact/Contact";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import AdminProducts from "./containers/AdminProducts/AdminProducts";
import BulmaNavBar from "./components/NavBar/BulmaNavBar.jsx";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartContext from "./utils/CartContext";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [token, setToken] = useState(
    // checks to see if there is a token in localStorage and uses that or else sets state to ""
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [role, setRole] = useState(
    // checks to see if there is a role in localStorage and uses that or else sets state to ""
    localStorage.getItem("role") ? localStorage.getItem("role") : ""
  );

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
        existingLineItem.totalWeight = item.totalWeight;
      } else {
        existingLineItem.quantity += item.quantity;
        existingLineItem.totalCost += item.totalCost;
        existingLineItem.totalWeight += item.totalWeight;
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

  const deleteItemFromCart = (id) => {
    // const cartItems = cartState.lineItems;
    const newCartItems = cartState.lineItems.filter(
      (item) => item.product.toString() !== id.toString()
    );
    setCartState({ ...cartState, lineItems: newCartItems });
    toast.success("Item deleted from cart!", { hideProgressBar: true });
  };

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={cartState}>
          <BulmaNavBar
            role={role}
            token={token}
            setRole={setRole}
            setToken={setToken}
            setCartState={setCartState}
          />
          <ToastContainer />
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/allproducts"
              render={(props) => (
                <AllProducts
                  {...props}
                  handleAddToCart={handleAddToCart}
                  token={token}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <Cart
                  {...props}
                  clearCart={clearCart}
                  handleAddToCart={handleAddToCart}
                  deleteItemFromCart={deleteItemFromCart}
                />
              )}
            />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  setUserId={setUserId}
                  setToken={setToken}
                  setRole={setRole}
                />
              )}
            />
            <Route path="/signup" component={SignUp} />

            <ProtectedRoute
              exact
              path="/admin"
              component={AdminProducts}
              token={token}
              role={role}
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
