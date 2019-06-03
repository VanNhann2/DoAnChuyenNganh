import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        var { children } = this.props
        return (
            <div className="col-md-12 cart-items">
                <h1>My Shopping Bag (2)</h1>
                { children }
            </div>

        );
    }
}

export default Cart;