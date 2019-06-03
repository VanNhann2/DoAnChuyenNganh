import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import '../../css/style.css'
class Menu extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
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
        </nav>
      </div>

    );
  }
}

export default Menu;