import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="social">
            <ul>
              <li><a href="http://facebook.com"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="http://twitter.com"><i className="fab fa-twitter" /></a></li>
              <li><a href="http://instagram.com"><i className="fab fa-instagram" /></a></li>
              <li><a href="http://google.com"><i className="fab fa-google-plus-g" /></a></li>
            </ul>
          </div>
          <div className="border" />
          <div className="agileits-w3layouts-copyright">
            <p>© 2017 Photo Maker. All rights reserved | Design by <a href="http://w3layouts.com/">V.Nhẫn</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;