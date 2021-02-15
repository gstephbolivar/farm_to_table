import React from 'react';

const ReservedProducts = (props) => {
    return (
       
            <tbody>
                {props.items.map((item) => (
                    <p>{item.name}</p>
                ))}
              {/* <h1>Items reserved go here</h1> */}
            </tbody>
    );
};

export default ReservedProducts;