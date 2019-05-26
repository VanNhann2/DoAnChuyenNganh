import React, { Component } from 'react';
//import $ from "jquery";
import '../../../css/style1.css';
//import '../../css/megamenu.css'
//import '../trangdangki/login.css'
import funtion from "jquery";
class PrLog extends Component {
    render() {
        return (
            <div>

          {/* <style>{` addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }`}</style>
          <style>{`$(document).ready(function(){$(".megamenu").megamenu();});`}</style> */}
 
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
        `} </style>



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

export default PrLog;