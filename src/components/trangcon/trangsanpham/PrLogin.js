import React, { Component } from 'react';
import $ from "jquery";
import axios from 'axios'
import '../../../css/style1.css';
import firebase from 'firebase'
import fire from '../../../connectdb/ConnectFirebase';

//import '../../css/megamenu.css'
//import '../trangdangki/login.css'  
import funtion from "jquery";
class PrLogin extends Component {

    render() {
        return (
            <div>

          {/* <style>{` addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }`}</style>
          <style>{`$(document).ready(function(){$(".megamenu").megamenu();});`}</style> */}
 
<div className="container">
  <div className="main">
    {/* start registration */}
    <div className="registration">
      
      {/* LOGINNNNNNNNNNNNNN */}
      <div className="registration_left">
        <h2>existing user</h2>
        <div className="registration_form">
          {/* Form */}
          <form id="registration_form" method="post">
            <div>
              <label>
                <input id = "exampleInputEmail1"  placeholder="email" type="email"  tabIndex={3} required  />
              </label>
            </div>
            <div>
              <label>
                <input id = "exampleInputPassword1" placeholder="password" type="password" name="password" tabIndex={4} required />

              </label>
            </div>						
            <div>
              <input type="submit" defaultValue="sign in" id="register-submit"/>
            </div>
            <div className="forget">
              <a href="#">forgot your password</a>
            </div>
          </form>
          {/* /Form */}
        </div>
      </div>
      <div className="clearfix" />
    </div>
    {/* end registration */}
  </div>
  </div>
  </div>



        );
    }
}

export default PrLogin;