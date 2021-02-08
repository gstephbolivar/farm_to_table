import React from 'react';
import './cartitem.css';

const CartItem = ({img, name, quantity, price}) => {
    return (

<div className="container cart-item">
      <div className="columns is-centered is-multiline">
        <div className="column is-6">
        <div className="vertical-center" style={{ padding: 10 }}>
                 <img src={img} alt="item description" style={{ marginRight: 15 }} />
                <span>{name}</span>
               </div>
        </div>
        <div className="column is-3">
        <div className="vertical-center" style={{height: 95,justifyContent: "center"}}>
                 <div>{quantity}</div>
               </div>
        </div>
        <div className="column is-3">
        <div className="vertical-center" style={{height: 95,justifyContent: "center"}}>
                 <div>${price}</div>
               </div>
        </div>
        </div>
 
        </div>






    );
};

export default CartItem;