import React from "react";
import { Link } from "react-router-dom";
import ReservedProducts from "../../components/ReservedProducts/ReservedProducts";
// import { useHistory } from "react-router-dom";
import "./confirmation.css";

const Confirmation = (props) => {
  // const history = useHistory();
  return (
    <section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered is-mulitline"></div>
        <div className="columns is-vcentered">
          <div className="column is-two-thirds">
            <img
              src="./assets/icons/login_1.svg"
              className="figure-img img-fluid rounded"
              id="IconConfirm"
              alt="avocado and apple"
            />
            <h3 className="title confirm-head-one"> Thank You!</h3>
            <h3 className="title confirm-head-two">
              {" "}
              Your order has been received!
            </h3>
            <p className="subtitle confirm-text">
              {" "}
              We look forward to seeing you and handing you only the freshest
              ingredients available this season! We accept debit and credit card
              & cash.{" "}
            </p>
            <div className="buttons is-centered">
              <Link
                to="/allproducts"
                className="button"
                type="button"
                id="continueBtn"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="column">
            <nav className="panel">
              <p className="panel-heading order-head">Order Summary</p>

              <ReservedProducts
                items={props.history.location.state.line}
                total={props.history.location.state.subTotal}
              />

              <div className="field is-grouped is-grouped-centered previous-orders">
                <button className="button is-half" id="view-previous-orders">
                  View Previous Orders
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
