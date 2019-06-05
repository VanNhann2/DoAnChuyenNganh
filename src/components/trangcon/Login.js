import React, { useState } from 'react';
//import Menu2 from './Menu2';
//import PrLogin from './trangsanpham/PrLogin';
import firebase from '../../connectdb/firebase'

// import firebase from 'firebase'
//import Home from '../trangchu/Home';
import {  withRouter, NavLink } from 'react-router-dom';  //Link,

function Login(props) {
 // const { classes } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
                <form id="registration_form" onSubmit={e => e.preventDefault() && false}>
                  <div>
                    <label>
                      <input id="exampleInputEmail1" placeholder="email" type="email" tabIndex={3} required autoFocus value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input id="exampleInputPassword1" placeholder="password" type="password" name="password" tabIndex={4} required autoFocus value={password} onChange={e => setPassword(e.target.value)} />

                    </label>
                  </div>
                  <div>
                    <input type="submit" defaultValue="sign in" id="register-submit" onClick={login} />
                  </div>
                  <div className="forget">
                    <a href="true">forgot your password</a> <br />
                    <NavLink to="/register">go to register</NavLink>

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

  )
  async function login() {
    try {
      await firebase.login(email, password)
      props.history.replace('/home')
    } catch (error) {
      console.log("error")
    }
  }


};


export default withRouter(Login);