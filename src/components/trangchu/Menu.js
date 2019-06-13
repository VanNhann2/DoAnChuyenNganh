import React from 'react';
import { BrowserRouter as Router, withRouter, NavLink, Link } from "react-router-dom";  //Route,
import firebase from '../../connectdb/firebase'

function Menu(props) {

  function checkL() {
    if (!firebase.getCurrentUsername()) {
      props.history.replace('/login')
      return null
    } else {
      alert('Bạn đã login')
    }
  }

  return (
    <div className="nav">
      <nav className="navbar navbar-default navbar-expand-xl navbar-light">
        <div className="navbar-header d-flex logo">
          <Link className="navbar-brand" to='/home'><i className="fas fa-camera-retro" />     r.<b>ing</b></Link>
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle navbar-toggler ml-auto">
            <span className="navbar-toggler-icon" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        {/* Collection of nav links, forms, and other content for toggling */}
        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
          <ul className="nav nav-me">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/canon">Products</NavLink>
            </li>

          </ul>
          {/* <form className="navbar-form form-inline">
      <div className="input-group search-box">								
        <input type="text" id="search" className="form-control" placeholder="Search by Name" />
        <span className="input-group-addon"><i className="material-icons"></i></span>
      </div>
    </form> */}
          <ul className="nav navbar-nav navbar-right ml-auto">
            <li className="nav-item"><a href="#" className="nav-link notifications"><i className="fab fa-facebook-messenger" /><span className="badge">1</span></a></li>
            <li className="nav-item"><a href="#" className="nav-link messages"><i className="fas fa-bell" /><span className="badge">10</span></a></li>
            <li className="nav-item dropdown">
              <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src="https://testboard.com/wp-content/uploads/2018/02/USER.png" className="avatar" alt="Avatar" /> Hello {firebase.getCurrentUsername()} <b className="caret" /></a>
              <ul className="dropdown-menu">
                <li><Link to="/profile" className="dropdown-item"><i className="far fa-address-card" /> Profile</Link></li>
                <li><a href="#" className="dropdown-item"><i className="far fa-calendar-alt" /> Calendar</a></li>
                <li><a href="#" className="dropdown-item"><i className="fas fa-user-cog" /> Settings</a></li>
                <li className="divider dropdown-divider" />
                <li><a href="#" className="dropdown-item" onClick={logout}><i className="fas fa-sign-out-alt" /> Logout</a></li>
                <li><a href="#" className="dropdown-item" onClick={checkL} ><i className="fas fa-lock-open" /> Login </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
  async function logout() {
    await firebase.logout()
    props.history.push('/')
  }

}


export default withRouter(Menu);