import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cart from './cart/Cart'
import CartResult from './cart/CartResult';


class PrCheckout extends Component {

  componentDidMount = () => {
    $(document).ready(function (c) {
      $('.close1').on('click', function (c) {
        $('.cart-header').fadeOut('slow', function (c) {
          $('.cart-header').remove();
        });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="check">
            <CartResult/>
             <Cart/>
           <div className="clearfix"> </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PrCheckout;