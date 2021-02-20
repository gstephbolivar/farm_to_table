import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import OrderHistoryItem from "../../components/OrderHistoryItem/OrderHistoryItem";
import moment from "moment";

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
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="columns is-centered is-multiline">
              <h3 className="title has-text-centered products-headline">
                Previous Orders
              </h3>
            </div>
          </div>
        </div>
      </div>

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
        <div className="column is-8 is-offset-2">
          {/* maps through the customerOrders state to create headings for each orderDate */}
          {customerOrders.map((order) => (
            <div className="column" key={order._id}>
              <p className="panel-heading order-head">
                <span className="has-text-weight-semibold">
                  {/* formats the ISO date to Month Day, Year */}
                  {moment(order.orderDate).format("MMMM D, YYYY")}
                </span>
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
                        <h1 className="sub-title" style={{ paddingLeft: 100 }}>
                          Item
                        </h1>
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
                  {order.LineItem.map((line, index) => (
                    <OrderHistoryItem
                      lineItem={line}
                      key={line._id}
                      index={index}
                    />
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
