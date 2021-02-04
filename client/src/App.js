import { useEffect } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
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
import CssBaseLine from "@material-ui/core/CssBaseline";






function App() {
  
  return (
    <>
    <CssBaseLine/>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/allproducts" component={AllProducts} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/confirmation" component={Confirmation} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/oneproduct" component={OneProduct} />
      <Route exact path="/admin" component={Products} />
      <Route exact path="/admin/add" component={AddProduct} />
      <Route exact path="/admin/edit" component={EditProduct} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
