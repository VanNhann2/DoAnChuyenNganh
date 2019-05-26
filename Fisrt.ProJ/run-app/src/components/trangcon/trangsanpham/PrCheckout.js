import React, { Component } from 'react';
//import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PrCheckout extends Component {
    render() {
        return (
            <div>
                <div className="container">
  <div className="check">	 
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
    <div className="col-md-9 cart-items">
      <h1>My Shopping Bag (2)</h1>
      <style>{`
        $(document).ready(function(c) {
          $('.close1').on('click', function(c){
            $('.cart-header').fadeOut('slow', function(c){
              $('.cart-header').remove();
            });
            });	  
          });
      `}</style>
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
      {/*   */}
      <div className="cart-header2">
        <div className="close2"> <i className="fas fa-window-close"></i></div>
        <div className="cart-sec simpleCart_shelfItem">
          <div className="cart-item cyc">
            <img src="images/11.jpg" className="img-responsive" alt="true" />
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
    </div>
    <div className="clearfix"> </div>
  </div>
</div>

            </div>
        );
    }
}

export default PrCheckout;