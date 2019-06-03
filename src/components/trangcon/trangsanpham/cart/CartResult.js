import React, { Component } from 'react';

class CartResult extends Component {
    render() {
        return (
            <div className="col-md-3 cart-total">
                <a className="continue" href="/canon">Continue to basket</a>
                <div className="price-details">
                    <h3>Price Details</h3>
                    <span>Total</span>
                    <span className="total1">6200.00</span>
                    <span>Discount</span>
                    <span className="total1">---</span>
                    <span>Delivery Charges</span>
                    <span className="total1">150.00</span>
                    <div className="clearfix" />
                </div>
                <ul className="total_price">
                    <li className="last_price"> <h4>TOTAL</h4></li>
                    <li className="last_price"><span>6350.00</span></li>
                    <div className="clearfix"> </div>
                </ul>
                <div className="clearfix" />
                <a className="order" href="#">Place Order</a>
                <div className="total-item">
                    <h3>OPTIONS</h3>
                    <h4>COUPONS</h4>
                    <a className="cpns" href="#">Apply Coupons</a>
                    <p><a href="/log">Log In</a> to use accounts - linked coupons</p>
                </div>
            </div>

        );
    }
}

export default CartResult;