import React, { useState } from 'react';
import '../../css/style1.css';
import { withRouter,Link } from 'react-router-dom' //Link,
import firebase from '../../connectdb/firebase'
import './register.css'
function Register(props) {
  //const { classes } = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [quote, setQuote] = useState('')

  return (
    <div className="container special">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex">
              {/* Background image for card set in CSS! */}
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>
              <form className="form-signin" onSubmit={e => e.preventDefault() && false}>
                <div className="form-label-group">
                  <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus onChange={e => setName(e.target.value)} />
                  <label htmlFor="inputUserame">Username</label>
                </div>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required  onChange={e => setEmail(e.target.value)}/>
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <hr />
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value) }/>
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />
                  <label htmlFor="inputConfirmPassword">Confirm password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={onRegister}>Register</button>
                {/* <a className="d-block text-center mt-2 small" href="#" onClick={onRegister}>Sign In</a> */}
                <hr className="my-4" />
                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign up with Google</button>
                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign up with Facebook</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-5 col-lg-7 mx-auto">
          <div className="changecsslogin">
            <Link to='/login'>Back Login <i class="fas fa-arrow-right" /></Link>
          </div>
        </div>
      </div>
    </div>

  )
  async function onRegister() {
    try {
      await firebase.register(name, email, password)
      await firebase.addQuote(quote)
      props.history.replace('/home')
    } catch (error) {
      alert(error.message)
    }
  }
}


export default withRouter(Register);