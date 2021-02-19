import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const OrderHistory = () => {
  const [customerOrders, setCustomerOrders] = useState([]);
  useEffect(() => {
    loadOrders();

    // console.log(orders.data[2].LineItem[0].product.name);
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
          <div className="column">
            <nav className="panel">
              <p className="panel-heading order-head">
                Order Date {order.orderDate}
              </p>
              {order.LineItem.map((line) => (
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
              ))}
            </nav>
          </div>
          // <>
          //   <p>{order.orderDate}</p>
          //   {order.LineItem.map((line) => (
          //     <p>
          //       {line.product.name} {line.price}
          //     </p>
          //   ))}
          // </>
        ))}

        <div className="field is-grouped is-grouped-centered previous-orders"></div>
      </div>
    </section>
  );
};

export default OrderHistory;
