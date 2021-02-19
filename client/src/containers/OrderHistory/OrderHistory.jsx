import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import OrderHistoryItem from "../../components/OrderHistoryItem/OrderHistoryItem";

const OrderHistory = () => {
  const [customerOrders, setCustomerOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const customerId = localStorage.getItem("userId");
    console.log(customerId);

    API.getOrders(customerId)
      .then((orders) => {
        setCustomerOrders(orders.data);

        console.log(customerOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="container">
      <div className="column">
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
                        height: 55,
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
                      style={{ height: 55, justifyContent: "center" }}
                    >
                      <h1 className="sub-title">Quantity</h1>
                    </div>
                  </th>
                  <th className="is-vcentered">
                    <div
                      className="vertical-center"
                      style={{ height: 55, justifyContent: "center" }}
                    >
                      <h1 className="sub-title">Price</h1>
                    </div>
                  </th>
                  <th className="is-vcentered">
                    <div
                      className="vertical-center"
                      style={{ height: 55, justifyContent: "center" }}
                    >
                      <h1 className="sub-title">Total Cost</h1>
                    </div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {order.LineItem.map((line) => (
                  <OrderHistoryItem lineItem={line} key={line._id} />
                ))}
              </tbody>
            </table>
            {/* {order.LineItem.map((line) => (
              <div className="panel-block" key={line.product.name}>
                <figure className="is-vcentered">
                  <img
                    id="confirmationImage"
                    src={line.product.pathway}
                    alt="item thumbnail"
                    width="50"
                    height="50"
                    // key={item.id}
                  />
                </figure>
                <p id="item-reserved">{line.product.name}</p>
              </div>
            ))} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderHistory;
