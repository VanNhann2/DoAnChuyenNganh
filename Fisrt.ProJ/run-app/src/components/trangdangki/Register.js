import React, { Component } from 'react';
import $ from "jquery";
class Register extends Component {
    render() {
        return (
            <div>
            <div className="header_bg">
  <div className="container">
    <div className="header">
      <div className="head-t">
        <div className="logo">
          <a href="index1.html"><img src="images/logo.png" className="img-responsive" alt /> </a>
        </div>
        {/* start header_right */}
        <div className="header_right">
          <div className="rgt-bottom">
            <div className="log">
              <div className="login">
                <div id="loginContainer"><a href="#" id="loginButton"><span>Login</span></a>
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
                      <span><a href="#">Forgot your password?</a></span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="reg">
              <a href="register.html">REGISTER</a>
            </div>
            <div className="cart box_1">
              <a href="checkout.html">
                <h3> <span className="simpleCart_total">$0.00</span> (<span id="simpleCart_quantity" className="simpleCart_quantity">0</span> items)<img src="images/bag.png" alt /></h3>
              </a>	
              <p><a href="javascript:;" className="simpleCart_empty">(empty card)</a></p>
              <div className="clearfix"> </div>
            </div>
            <div className="create_btn">
              <a href="checkout.html">CHECKOUT</a>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="search">
            <form>
              <input type="text" defaultValue placeholder="search..." />
              <input type="submit" defaultValue />
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
</div>

<div className="container">
  <div className="main">
    {/* start registration */}
    <div className="registration">
      <div className="registration_left">
        <h2>new user? <span> create an account </span></h2>

        <style>{`
            (function() {
		
                var inputs = document.createElement('input');
                
                var supports = {};
                
                supports.autofocus   = 'autofocus' in inputs;
                supports.required    = 'required' in inputs;
                supports.placeholder = 'placeholder' in inputs;
            
                if(!supports.autofocus) {
                    
                }
                
                if(!supports.required) {
                    
                }
            
                if(!supports.placeholder) {
                    
                }
                
                var send = document.getElementById('register-submit');
                if(send) {
                    send.onclick = function () {
                        this.innerHTML = '...Sending';
                    }
                }
            
            })();
        `
        }
        </style>



        <div className="registration_form">
          {/* Form */}
          <form id="registration_form" action="contact.php" method="post">
            <div>
              <label>
                <input placeholder="first name:" type="text" tabIndex={1} required autofocus />
              </label>
            </div>
            <div>
              <label>
                <input placeholder="last name:" type="text" tabIndex={2} required autofocus />
              </label>
            </div>
            <div>
              <label>
                <input placeholder="email address:" type="email" tabIndex={3} required />
              </label>
            </div>
            <div className="sky-form">
              <div className="sky_form1">
                <ul>
                  <li><label className="radio left"><input type="radio" name="radio" defaultChecked /><i />Male</label></li>
                  <li><label className="radio"><input type="radio" name="radio" /><i />Female</label></li>
                  <div className="clearfix" />
                </ul>
              </div>
            </div>
            <div>
              <label>
                <input placeholder="password" type="password" tabIndex={4} required />
              </label>
            </div>						
            <div>
              <label>
                <input placeholder="retype password" type="password" tabIndex={4} required />
              </label>
            </div>	
            <div>
              <input type="submit" defaultValue="create an account" id="register-submit" />
            </div>
            <div className="sky-form">
              <label className="checkbox"><input type="checkbox" name="checkbox" /><i />i agree to shoppe.com &nbsp;<a className="terms" href="#"> terms of service</a> </label>
            </div>
          </form>
          {/* /Form */}
        </div>
      </div>
      <div className="registration_left">
        <h2>existing user</h2>
        <div className="registration_form">
          {/* Form */}
          <form id="registration_form" action="contact.php" method="post">
            <div>
              <label>
                <input placeholder="email:" type="email" tabIndex={3} required />
              </label>
            </div>
            <div>
              <label>
                <input placeholder="password" type="password" tabIndex={4} required />
              </label>
            </div>						
            <div>
              <input type="submit" defaultValue="sign in" id="register-submit" />
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

export default Register;