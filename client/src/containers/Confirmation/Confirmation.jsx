import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReservedProducts from "../../components/ReservedProducts/ReservedProducts";

const Confirmation = () => {
  return (
    <section>
      <div className="container has-text-centered">
        <div className="columns is-centered is-mulitline">
          <div className="column is-8">
            <h1>Ordered Confirmed</h1>
            <h3> Thank you for your order!</h3>
            <p>
              {" "}
              We look forward to seeing you and handing you only the freshest
              ingredients available this season! We accept debit and credit card
              as well as cash currently.{" "}
            </p>
            <br />
            <ReservedProducts />
            <br />
            <div className="buttons are-medium is-centered">
              <Link to="/" className="button" type="button" id="shopNow">
                Home
              </Link>
            </div>
            <div className="buttons are-medium is-centered">
              <Link
                to="/allproducts"
                className="button"
                type="button"
                id="shopNow"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
