import React, { Component } from 'react';
//import Products from './products/Products'
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
                  <img src="https://www.canon.co.uk/media/EOS-700D_Default_tcm14-1034532.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info">
                    <h3>CANON 200D</h3>
                    <p>DISCOVER THE EOS 200D. PHOTOS AND VIDEOS
</p>
                    <div className="crt-btn">
                      <a href="details.html">TAKE A LOOK</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 arriv-right">
                  <img src="https://www.sony.com.vn/image/813c6cf47a8074be14d990f60c94e931?fmt=jpeg&wid=720&qlt=85" className="img-responsive" alt="true" />
                  <div className="arriv-info">
                    <h3>SONY RX0</h3>
                    <p>DISCOVER THE EOS RX0. PHOTOS AND VIDEOS</p>
                    <div className="crt-btn">
                      <a href="details.html">SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="arriv-bottm">
                <div className="col-md-8 arriv-left1">
                  <img src="https://images.samsung.com/is/image/samsung/uk-nx300-20-50mm-lens-ev-nx300zbatgb-607-front-with-lens-black?$PD_GALLERY_L_JPG$" className="img-responsive" alt="true" />
                  <div className="arriv-info1">
                    <h3>SAMSUNG NX300</h3>
                    <p>DISCOVER THE EOS NX300. PHOTOS AND VIDEOS</p>
                    <div className="crt-btn">
                      <a href="details.html">SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 arriv-right1">
                  <img src="images/4.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info2">
                    <a href="details.html"><h3>READ...<i className="ars" /></h3></a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="arriv-las">
                <div className="col-md-4 arriv-left2">
                  <img src="images/5.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info2">
                    <a href="details.html"><h3>READ...<i className="ars" /></h3></a>
                  </div>
                </div>
                <div className="col-md-4 arriv-middle">
                  <img src="https://www.usa.canon.com/internet/wcm/connect/us/2b21ef88-311a-4765-8ecd-d6a9653d9e92/eos6d_lens3q_675x450.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-2b21ef88-311a-4765-8ecd-d6a9653d9e92-kZ2x-PZ" className="img-responsive" alt="true" />
                  <div className="arriv-info3">
                    <h3>CANON 6D</h3>
                    <div className="crt-btn">
                      <a href="details.html">SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 arriv-right2">
                  <img src="images/7.jpg" className="img-responsive" alt="true" />
                  <div className="arriv-info2">
                    <a href="details.html"><h3>READ...<i className="ars" /></h3></a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
          <MessageContainer/>
          <ProductsContainer/>
          
        </div>

      </div>
    );
  }
}

export default PrCanon;