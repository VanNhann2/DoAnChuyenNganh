import React, { Component } from 'react';

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
        <li><a href="index1.html">Home | </a></li>
        <li><a href="index1.html">Canon</a></li>
        <li><a href="index1.html">Nikon</a></li>
        <li><a href="index1.html">Fujifim</a></li>
        <li><a href="index1.html">Sony</a></li>
        <li><a href="index1.html">SamSung</a></li>
        <li><a href="index1.html">Kolak</a></li>
      </ul>	
      <div className="clearfix"> </div>
    </div>	
  </nav>	
</div>

        );
    }
}

export default Menu;