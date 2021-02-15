import React from 'react';

const ReservedProducts = () => {
    return (
        <section className="hero has-text-centered">
        <div className="table-container">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>
                  <div className="center">
                    <h1 className="sub-title">Item(s) Reserved</h1>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <CartItem /> */}
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default ReservedProducts;