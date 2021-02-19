import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import OrderHistoryItem from "../../components/OrderHistoryItem/OrderHistoryItem";

const OrderHistory = () => {
  const [customerOrders, setCustomerOrders] = useState([]);

  // loads the orders on page load
  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const customerId = localStorage.getItem("userId");

    // makes the API call to get the orders based on the customerId
    API.getOrders(customerId)
      .then((orders) => {
        setCustomerOrders(orders.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="container">
      {/* if a customer has no previous orders, display message */}
      {customerOrders.length === 0 ? (
        <article className="message is-medium">
          <div className="message-header">
            <p>No Previous Orders</p>
          </div>
          <div className="message-body">
            Please place an order to start tracking.
          </div>
        </article>
      ) : (
        <div className="column">
          {/* maps through the customerOrders state to create headings for each orderDate */}
          {customerOrders.map((order) => (
            <div className="column" key={order._id}>
              <p className="panel-heading order-head">
                Order Date {order.orderDate}
              </p>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>
                      <div
                        className="vertical-center"
                        style={{
                          height: 20,
                          justifyContent: "left",
                          padding: 10,
                        }}
                      >
                        <h1 className="sub-title">Item</h1>
                      </div>
                    </th>
                    <th className="is-vcentered">
                      <div
                        className="vertical-center"
                        style={{ height: 20, justifyContent: "center" }}
                      >
                        <h1 className="sub-title">Quantity</h1>
                      </div>
                    </th>
                    <th className="is-vcentered">
                      <div
                        className="vertical-center"
                        style={{ height: 20, justifyContent: "center" }}
                      >
                        <h1 className="sub-title">Price</h1>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* maps through the lineItems array in the customerOrders object to display each item in the specified order */}
                  {order.LineItem.map((line) => (
                    <OrderHistoryItem lineItem={line} key={line._id} />
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistory;
