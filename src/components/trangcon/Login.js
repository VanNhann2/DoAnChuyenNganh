import React, { useState } from 'react';
import './/login.css'
//import Menu2 from './Menu2';
//import PrLogin from './trangsanpham/PrLogin';
import firebase from '../../connectdb/firebase'

// import firebase from 'firebase'
//import Home from '../trangchu/Home';
import { withRouter, Link } from 'react-router-dom';  //Link,

function Login(props) {
  // const { classes } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="container special">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin" onSubmit={e => e.preventDefault() && false}>
                <div className="form-label-group">

                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={email} onChange={e => setEmail(e.target.value)} />
                  <label htmlFor="inputEmail">Email</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required autofocus value={password} onChange={e => setPassword(e.target.value)} />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                {/* <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
            </div> */}
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={login} >Sign in</button>
                <hr className="my-4" />
                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign in with Google</button>
                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-5 col-lg-7 mx-auto">
          <div>rê chuột quanh đây để tìm nút Register</div>

          <div className="changecsslogin">
            <Link to='/register'>Register <i class="fas fa-arrow-right" /></Link>
          </div>
        </div>
      </div>
    </div>

  )
  async function login() {
    try {
      await firebase.login(email, password)
      props.history.replace('/home')
    } catch (error) {
      alert('account is not correct.!! Please login again')
    }
  }


};


export default withRouter(Login);