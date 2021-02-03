import React from 'react';
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
    return (
        <div>
            <h1>This is the page to view the cart at checkout.</h1>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
};

export default Cart;