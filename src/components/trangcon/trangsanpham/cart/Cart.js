import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        return (
            <div className="col-md-9 cart-items">
            <h1>My Shopping Bag (2)</h1>
                <CartItem/>
                <CartItem/>
                <CartItem/>
          </div>
         
        );
    }
}

export default Cart;