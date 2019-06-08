import React, { Component } from 'react';
import firebase from '../../../../connectdb/firebase'
import { withRouter } from "react-router-dom";

class CartResult extends Component {
    render() {
        // if (!firebase.getCurrentUsername()) {
        //     // not logged in
        //     alert('Please login first')
        //     this.props.history.push('/login')
        //     return null
        //   }
        var { cart } = this.props
         return (
            <div className="col-md-3 cart-total">
                <a className="continue" href="/canon">Continue to basket</a>
                <div className="price-details">
                    <h3>Thanh Toán Sản Phẩm</h3>
                    <span>Total</span>
                    <span className="total1">{this.showTotalAmount(cart)} $</span>
                    <span>Giảm Giá</span>
                    <span className="total1">---</span>
                    <span>Phí Vận Chuyển</span>
                    <span className="total1">150.00</span>
                    <div className="clearfix" />
                </div>
                <ul className="total_price">
                    <li className="last_price"> <h4>Total</h4></li>
                <li className="last_price"><span>{this.showTotalAmount(cart) + 150} $</span></li>
                    <div className="clearfix"> </div>
                </ul>
                <div className="clearfix" />
                <a className="order" onClick={() => this.payment()}>Place Order</a>
                <div className="total-item">
                    <h3>OPTIONS</h3>
                    <h4>COUPONS</h4>
                    <a className="cpns" href="true">Apply Coupons</a>
                    <p><a href="/log">Log In</a> to use accounts - linked coupons</p>
                </div>
            </div>

        );
    }
    payment = () =>{
        if (!firebase.getCurrentUsername()) {
                // not logged in
                alert('Please login first')
                this.props.history.push("/login")
                return null
              }
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

}

export default withRouter(CartResult);