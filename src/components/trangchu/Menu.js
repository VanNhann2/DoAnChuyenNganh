import React from 'react';
import { BrowserRouter as Router,  withRouter, NavLink } from "react-router-dom";  //Route,
import firebase from '../../connectdb/firebase'
function Menu(props) {
  
    return (
      <div className="nav">
        {/* <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
         
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/canon">Canon</NavLink>
              </li>
              <li>
                <NavLink to="/nikon">Nikon</NavLink>
              </li>
              <li>
                <NavLink to="/fujifim">Fujifim</NavLink>
              </li>
              <li>
                <NavLink to="/sony">Sony</NavLink>
              </li>
              <li>
                <NavLink to="/samsung">SamSung</NavLink>
              </li>
              <li>
                <Link to="/kolak">Kolak</Link>
              </li>
            </ul>
            <div className="clearfix"> </div>
          </div>
        </nav> */}
      


<nav className="navbar navbar-default navbar-expand-xl navbar-light">
  <div className="navbar-header d-flex logo">
    <a className="navbar-brand" href="#"><i className="fas fa-camera-retro"/>     r.<b>ing</b></a>  		  
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
      <li className="nav-item"><a href="#" className="nav-link notifications"><i className="fab fa-facebook-messenger"/><span className="badge">1</span></a></li>
      <li className="nav-item"><a href="#" className="nav-link messages"><i className="fas fa-bell"/><span className="badge">10</span></a></li>
      <li className="nav-item dropdown">
        <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src="https://testboard.com/wp-content/uploads/2018/02/USER.png" className="avatar" alt="Avatar" /> Hello {firebase.getCurrentUsername()} <b className="caret" /></a>
        <ul className="dropdown-menu">
          <li><a href="#" className="dropdown-item"><i className="far fa-address-card"/> Profile</a></li>
          <li><a href="#" className="dropdown-item"><i className="far fa-calendar-alt"/> Calendar</a></li>
          <li><a href="#" className="dropdown-item"><i className="fas fa-user-cog"/> Settings</a></li>
          <li className="divider dropdown-divider" />
          <li><a href="#" className="dropdown-item" onClick={logout}><i className="fas fa-sign-out-alt"/> Logout</a></li>
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


export default withRouter (Menu);