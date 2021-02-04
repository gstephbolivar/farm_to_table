import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./containers/Home/Home.jsx";
import AllProducts from "./containers/AllProducts/AllProducts.jsx";
import Cart from "./containers/Cart/Cart.jsx";
import Confirmation from "./containers/Confirmation/Confirmation";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import OneProduct from "./containers/OneProduct/OneProduct";
import Products from "./containers/Admin/Products/Products";
import AddProduct from "./containers/Admin/AddProduct/AddProduct";
import EditProduct from "./containers/Admin/EditProduct/EditProduct";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/allproducts" component={AllProducts} />
        <Route path="/cart" component={Cart} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/oneproduct" component={OneProduct} />
        <Route path="/admin" component={Products} />
        <Route path="/admin/add" component={AddProduct} />
        <Route path="/admin/edit" component={EditProduct} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
