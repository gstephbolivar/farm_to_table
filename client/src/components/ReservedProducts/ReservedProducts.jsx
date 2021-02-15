import React from "react";

const ReservedProducts = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <tr>
          <td>{item.name}</td>
        </tr>
      ))}
      <br />
        <tr>
            <td>
               Total: {props.total}
            </td>
        </tr>
      {/* <p> {props.total}</p> */}
      {/* <h1>Items reserved go here</h1> */}
    </>
  );
};

export default ReservedProducts;
