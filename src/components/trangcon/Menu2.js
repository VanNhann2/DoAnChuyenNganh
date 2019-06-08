import React from 'react'  //,  { useEffect, useState } 
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";  //Route,
import firebase from '../../connectdb/firebase'
function Menu2(props) {


  // if (!firebase.getCurrentUsername()) {
  //   // not logged in
  //   alert('Please login first')
  //   props.history.replace('/login')
  //   return null
  // }

  return (
    <div>
      <div className="header_bg">
        <div className="container">
          <div className="header">
            <div className="head-t">
              <div className="logo">
                {/* <a href="/"><img src="images/login.png" className="img-responsive" alt="true" /> </a> */}
                <Link to="/"><img src="https://www.toolstation.com/img/brands/ringbyamazon.png" className="img-responsive" alt="true" /></Link>
              </div>
              {/* start header_right */}
              <div className="header_right">
                <div className="rgt-bottom">
                  <div className="text-danger"></div>
                  {/* <button className="btn-danger" onClick={logout}>Logout</button> */}
                  <div className="cart box_1">

                    <Link to="/checkout">
                      <h3> <span className="simpleCart_total">$0.00</span> (<span id="simpleCart_quantity" className="simpleCart_quantity">0</span> items)<img src="images/bag.png" alt="true" /></h3>

                    </Link>
                    <p><a href="true" className="simpleCart_empty">(empty card)</a></p>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="create_btn">
                    {/* <a href="/login">CHECKOUT</a> */}
                    <Link to="/checkout">
                      CHECKOUT
              </Link>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="search">
                  <form>
                    <input type="text" placeholder="search..." />
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
  )
  // async function logout() {
  //   await firebase.logout()
  //   props.history.push('/')
  // }
}

export default withRouter(Menu2);