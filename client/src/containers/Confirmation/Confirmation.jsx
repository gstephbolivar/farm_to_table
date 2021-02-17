import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReservedProducts from "../../components/ReservedProducts/ReservedProducts";
import { useHistory } from "react-router-dom";
import "./confirmation.css";

const Confirmation = (props) => {
  const history = useHistory();
  return (
    <section class="section">
      <div className="container has-text-centered">
        <div className="columns is-centered is-mulitline"></div>
        <div class="columns is-vcentered">
          <div class="column is-two-thirds">
            <img
              src="./assets/icons/login_1.svg"
              className="figure-img img-fluid rounded"
              id="IconConfirm"
              alt="avocado and apple"
            />
            <h3 class="title confirm-head-one"> Thank You!</h3>
            <h3 class="title confirm-head-two">
              {" "}
              Your order has been received!
            </h3>
            <p class="subtitle confirm-text">
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
          <div class="column">
            <nav class="panel">
              <p class="panel-heading order-head">Order Summary</p>

              <ReservedProducts
                items={props.history.location.state.line}
                total={props.history.location.state.subTotal}
              />

              <div class="field is-grouped is-grouped-centered previous-orders">
                <button class="button is-half" id="view-previous-orders">
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
