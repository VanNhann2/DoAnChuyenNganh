import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CartItem extends Component {
    render() {
        return (
            <div className="cart-header">
                <div className="close1"> <i className="fas fa-window-close"></i></div>
                <div className="cart-sec simpleCart_shelfItem">
                    <div className="cart-item cyc">
                        <img src="images/8.jpg" className="img-responsive" alt="true" />
                    </div>
                    <div className="cart-item-info">
                        <h3>
                            {/* <a href="/detail">Mountain Hopper(XS R034)</a><span>Model No: 3578</span> */}
                            <Link to="/detail">Mountain Hopper(XS R034)</Link><span>Model No: 3578</span>
                        </h3>
                        <ul className="qty">
                            <li><p>Size : 5</p></li>
                            <li><p>Qty : 1</p></li>
                        </ul>
                        <div className="delivery">
                            <p>Service Charges : Rs.100.00</p>
                            <span>Delivered in 2-3 bussiness days</span>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        );
    }
}

export default CartItem;