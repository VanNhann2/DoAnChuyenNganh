import React, { Component } from 'react';
import Products from './products/Products'
import ProductsContainer from '../../../containers/ProductsContainer';
import MessageContainer from '../../../containers/MessageContainer'

class PrCanon extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="arriv">
            <div className="container">
              <div className="arriv-top">
                <div className="col-md-6 arriv-left">
                  <img src="images/1.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info">
                    <h3>NEW ARRIVALS</h3>
                    <p>REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
                    <div className="crt-btn">
                      <a href="details.html">TAKE A LOOK</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 arriv-right">
                  <img src="images/2.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info">
                    <h3>TUXEDO</h3>
                    <p>REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
                    <div className="crt-btn">
                      <a href="details.html">SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="arriv-bottm">
                <div className="col-md-8 arriv-left1">
                  <img src="images/3.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info1">
                    <h3>SWEATER</h3>
                    <p>REVIVE YOUR WARDROBE WITH CHIC KNITS</p>
                    <div className="crt-btn">
                      <a href="details.html">SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 arriv-right1">
                  <img src="images/4.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info2">
                    <a href="details.html"><h3>Trekking Shoes<i className="ars" /></h3></a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="arriv-las">
                <div className="col-md-4 arriv-left2">
                  <img src="images/5.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info2">
                    <a href="details.html"><h3>Casual Glasses<i className="ars" /></h3></a>
                  </div>
                </div>
                <div className="col-md-4 arriv-middle">
                  <img src="images/6.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info3">
                    <h3>FRESH LOOK T-SHIRT</h3>
                    <div className="crt-btn">
                      <a href="details.html">SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 arriv-right2">
                  <img src="images/7.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info2">
                    <a href="details.html"><h3>Elegant Watches<i className="ars" /></h3></a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
          <ProductsContainer/>
          <MessageContainer/>
        </div>

      </div>
    );
  }
}

export default PrCanon;