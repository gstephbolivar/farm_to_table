import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <section>
      <div className="container has-text-centered">
        <div className="columns is-centered is-mulitline">
          <div className="column is-8">
            <h1>Ordered Confirmed</h1>
            
            <div className="buttons are-medium is-centered">
              <Link
                to="/"
                className="button"
                type="button"
                id="shopNow"
              >
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
