import React from "react";
import { Link } from "react-router-dom";
import "./BulmaNavBar.css";
import { useContext } from "react";
import CartContext from "../../utils/CartContext";
import CartBadge from "../CartBadge/CartBadge";

const BulmaNavBar = ({ role, token, setRole, setToken, setCartState }) => {
  const { lineItems } = useContext(CartContext);

  const count = lineItems.reduce(
    (total, current) => total + current.quantity,
    0,
    lineItems,
    0
  );

  // handles the logout of the user, clearing all state objects and localstorage
  const handleLogout = () => {
    localStorage.clear();
    setRole("");
    setToken("");
    setCartState({
      userId: "",
      lineItems: [],
    });
  };

  return (
    <nav
      className="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <input type="checkbox" id="toggler" className="toggler" />
      {/* <!-- for toggling functionality. Should be at the same level as navbar-menu --> */}
      <div className="navbar-brand">
        {/* <!-- left side of bulma navbar --> */}
        <Link className="navbar-item" to="/">
          <span className="icon">
            <img
              className="nav-icons"
              src="./assets/icons/home.svg"
              alt="home farm icon"
            />
          </span>
          <span id="nav-home">Home</span>
        </Link>
        {/* if a user is logged in (has a role) renders cart link */}
        {role ? (
          <Link className="navbar-item" to="/cart">
            <span className="icon">
              <img
                className="nav-icons"
                src="./assets/icons/cart.svg"
                alt="cart icon"
              />
            </span>
            <span id="nav-products">
              {" "}
              Cart ( <CartBadge count={count} /> )
            </span>
          </Link>
        ) : null}
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

          <Link className="navbar-item" to="/allproducts">
            {/* <!-- begin dropdown box --> */}
            <span className="icon">
              <img
                className="nav-icons"
                src="./assets/icons/products.svg"
                alt="products icon"
              />
            </span>
            <span id="nav-products"> Products</span>
          </Link>

          {/* if a user is not logged in (does not have a role) renders login and sign up links */}
          {!role ? (
            <>
              <Link className="navbar-item" to="/login">
                <span className="icon">
                  <img
                    className="nav-icons"
                    src="./assets/icons/login.svg"
                    alt="chicken icon"
                  />
                </span>
                <span id="nav-login">Login</span>
              </Link>
              <Link className="navbar-item" to="/signup">
                <span className="icon">
                  <img
                    className="nav-icons"
                    src="./assets/icons/signUp.svg"
                    alt="cow icon"
                  />
                </span>
                <span id="nav-signUp">Sign Up</span>
              </Link>{" "}
            </>
          ) : (
            // renders a logout button if user is logged in (has a role)
            <>
              <Link className="navbar-item" to="/" onClick={handleLogout}>
                <span className="icon">
                  <img
                    className="nav-icons"
                    src="./assets/icons/logOut.svg"
                    alt="pig icon"
                  />
                </span>
                <span id="nav-signUp">Logout</span>
              </Link>{" "}
              {/* past orders page */}
              <Link className="navbar-item" to="/orderHistory">
                <span className="icon">
                  <img
                    className="nav-icons"
                    src="./assets/icons/previousOrders.svg"
                    alt="wagon icon"
                  />
                </span>
                <span id="nav-signUp">Previous Orders</span>
              </Link>{" "}
            </>
          )}
          <Link className="navbar-item" to="/contact">
            <span className="icon">
              {/* TODO: set a navbar image here */}
              <img
                className="nav-icons"
                src="./assets/icons/contact.svg"
                alt="barn icon"
              />
            </span>
            <span id="nav-home">Contact</span>
          </Link>
          {/* if a user is logged in as an admin renders dashboard link */}
          {role === "admin" ? (
            <Link className="navbar-item" to="/admin">
              <span className="icon">
                <img
                  className="nav-icons"
                  src="./assets/icons/farmDash.svg"
                  alt="tractor icon"
                />
              </span>
              <span id="nav-dashboard">Farm Dashboard</span>
            </Link>
          ) : null}
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
