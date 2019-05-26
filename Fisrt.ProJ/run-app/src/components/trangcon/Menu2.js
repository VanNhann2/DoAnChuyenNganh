import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Menu2 extends Component {
    render() {
        return (
            <div>
      <div className="header_bg">
  <div className="container">
    <div className="header">
      <div className="head-t">
        <div className="logo">
          {/* <a href="/"><img src="images/logo.png" className="img-responsive" alt="true" /> </a> */}
          <Link to="/"><img src="images/logo.png" className="img-responsive" alt="true" /> </Link>
        </div>
        {/* start header_right */}
        <div className="header_right">
          <div className="rgt-bottom">
            <div className="log">
              <div className="login">
                <div id="loginContainer"><Link to="/log" id="loginButton"><span>Login</span></Link>
                  <div id="loginBox">                
                    <form id="loginForm">
                      <fieldset id="body">
                        <fieldset>
                          <label htmlFor="email">Email Address</label>
                          <input type="text" name="email" id="email" />
                        </fieldset>
                        <fieldset>
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" id="password" />
                        </fieldset>
                        <input type="submit" id="login" defaultValue="Sign in" />
                        <label htmlFor="checkbox"><input type="checkbox" id="checkbox" /> <i>Remember me</i></label>
                      </fieldset>
                      <span><a href="https://gmail.com">Forgot your password?</a></span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="reg">
              <Link to="/log">REGISTER</Link>
            </div>
            <div className="cart box_1">
              
              <Link to="/checkout">
                <h3> <span className="simpleCart_total">$0.00</span> (<span id="simpleCart_quantity" className="simpleCart_quantity">0</span> items)<img src="images/bag.png" alt="true" /></h3>

              </Link>
              <p><a href="javascript:;" className="simpleCart_empty">(empty card)</a></p>
              <div className="clearfix"> </div>
            </div>
            <div className="create_btn">
              {/* <a href="/log">CHECKOUT</a> */}
              <Link to="/checkout">
                CHECKOUT
              </Link>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="search">
            <form>
              <input type="text" placeholder="search..."/>
              <i className="fas fa-search"></i>
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Menu2;