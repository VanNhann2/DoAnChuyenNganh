import React, { Component } from 'react';
import Menu2 from './Menu2';
import PrCheckout from './trangsanpham/PrCheckout';

class Checkout extends Component {
    render() {
        return (
            <div>
                <Menu2/>
                <PrCheckout/>
            </div>
        );
    }
}

export default Checkout;