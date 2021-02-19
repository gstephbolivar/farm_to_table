import React, { useEffect } from "react";
import API from "../../utils/API";

const OrderHistory = () => {
  useEffect(() => {
    const customerId = localStorage.getItem("userId");
    console.log(customerId);

    API.getOrders(customerId).then((orders) => {
      console.log(orders);
    });
  });

  return (
    <section className="container">
      <div className="column">
        <nav className="panel">
          <p className="panel-heading order-head">Order Summary</p>

          <div className="field is-grouped is-grouped-centered previous-orders"></div>
        </nav>
      </div>
    </section>
  );
};

export default OrderHistory;
