import React from 'react';
import { Link } from 'react-router-dom';
import "./BulmaNavBar.css";
import {useContext} from "react";
import CartContext from '../../utils/CartContext';
import CartBadge from '../CartBadge/CartBadge';



const BulmaNavBar = () => {
    const {lineItems} = useContext(CartContext);
    const count = lineItems.reduce((total, current) => total + current.quantity, 0, lineItems, 0);
  

    return (
        <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <input type="checkbox" id="toggler" className="toggler" />
      {/* <!-- for toggling functionality. Should be at the same level as navbar-menu --> */}
      <div className="navbar-brand">
        {/* <!-- left side of bulma navbar --> */}
        <Link className="navbar-item" to="/">
        <span className="icon">
        <i className="fas fa-home"></i>
        </span>
        <span id="nav-home"> <strong style={{marginLeft: 5}}>Home</strong></span>
        </Link>
        <Link className="navbar-item is-hoverable" to="/cart">
            <span className="icon">
            <CartBadge count={count}/>
            </span>
            <span id="nav-products"> <strong style={{marginLeft: 5}}>Cart</strong></span>
        </Link>
        <label
          htmlFor="toggler"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </label>
      </div>
      {/* <!-- end of left side of bulma navbar --> */}
      <div id="navbarBasicExample" className="navbar-menu">
        {/* <!-- dont shown on mobile --> */}
        <div className="navbar-end">
          {/* <!-- left on big screen -->
          <!-- a dropdown menu --> */}
          <Link className="navbar-item is-hoverable" to="/allproducts">
            {/* <!-- begin dropdown box --> */}
            <span className="icon">
            <i className="fas fa-carrot"></i>
            </span>
            <span id="nav-products"> <strong style={{marginLeft: 5}}>Products</strong></span>
          </Link>

          <Link className="navbar-item" to="/login">
            <span className="icon">
            <i className="fas fa-house-user"></i>
            </span>
            <strong style={{marginLeft: 5}} id="nav-login">Login</strong>
          </Link>

          <Link className="navbar-item" to="/signup">
            <span className="icon">
            <i className="fas fa-user-plus"></i>
            </span>
            <strong style={{marginLeft: 5}} id="nav-signUp">Sign Up</strong>
          </Link>

          <Link className="navbar-item" to="/admin">
            <span className="icon">
            <i className="fas fa-tractor"></i>
            </span>
            <strong style={{marginLeft: 5}} id="nav-dashboard">Farm Dashboard</strong>
          </Link>
          </div>

          {/* <div className="navbar-item">
            <strong id="nav-text"
              ><span style="display: none">
                <span className="icon">
                  <i className="fas fa-user-check"></i>
                </span>
                Logged in as <span id="username"></span></span
            ></strong>
          </div> */}

          {/* <Link
            className="navbar-item"
            href="/logout"
            id="logout"
            style="display: none"
          >
            <span className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            <strong id="nav-text">Log Out</strong>
          </Link> */}
      </div>
    </nav>
    );
};

export default BulmaNavBar;