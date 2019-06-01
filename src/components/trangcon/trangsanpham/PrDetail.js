import React, { Component } from 'react';
import $ from 'jquery';
class PrDetail extends Component {
    render() {
        return (
            <div>
                <style>{`
                    jQuery(document).ready(function($){

                        $('#etalage').etalage({
                            thumb_image_width: 300,
                            thumb_image_height: 400,
                            source_image_width: 900,
                            source_image_height: 1200,
                            show_hint: true,
                            click_callback: function(image_anchor, instance_id){
                                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
                            }
                        });
        
                    });
                `}</style>
                <div className="container">
  <div className="women_main">
    {/* start content */}
    <div className="row single">
      <div className="col-md-12 det">
        <div className="single_left">
          <div className="grid images_3_of_2">
            <ul id="etalage">
              <li>
                <a href="optionallink.html">
                  <img className="etalage_thumb_image" src="images/d1.jpg" />
                  {/* <img className="etalage_source_image" src="images/d1.jpg" title /> */}
                </a>
              </li>
            </ul>
            <div className="clearfix" />		
          </div>
          <div className="desc1 span_3_of_2">
            <h3>soluta nobis eleifend option</h3>
            <span className="brand">Brand: <a href="#">Sed do eiusmod </a></span>
            <br />
            <span className="code">Product Code: Product 11</span>
            <p>when an unknown printer took a galley of type and scrambled it to make</p>
            <div className="price">
              <span className="text">Price:</span>
              <span className="price-new">$110.00</span><span className="price-old">$100.00</span> 
              <span className="price-tax">Ex Tax: $90.00</span><br />
              <span className="points"><small>Price in reward points: 400</small></span><br />
            </div>
            <div className="det_nav1">
              <h4>Select a size :</h4>
              <div className=" sky-form col col-4">
                <ul>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />L</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />S</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />M</label></li>
                  <li><label className="checkbox"><input type="checkbox" name="checkbox" /><i />XL</label></li>
                </ul>
              </div>
            </div>
            <div className="btn_form">
              <a href="checkout.html">buy</a>
            </div>
            <a href="#"><span>login to save in wishlist </span></a>
          </div>
          <div className="clearfix" />
        </div>
        <div className="single-bottom1">
          <h6>Details</h6>
          <p className="prod-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option</p>
        </div>
        <div className="single-bottom2">
          <h6>Related Products</h6>
          <div className="product">
            <div className="product-desc">
              <div className="product-img">
                <img src="images/w8.jpg" className="img-responsive " alt="true" />
              </div>
              <div className="prod1-desc">
                <h5><a className="product_link" href="#">Excepteur sint</a></h5>
                <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>									
              </div>
              <div className="clearfix" />
            </div>
            <div className="product_price">
              <span className="price-access">$597.51</span>								
              <button className="button1"><span>Add to cart</span></button>
            </div>
            <div className="clearfix" />
          </div>
          <div className="product">
            <div className="product-desc">
              <div className="product-img">
                <img src="images/w10.jpg" className="img-responsive " alt="true" />
              </div>
              <div className="prod1-desc">
                <h5><a className="product_link" href="#">Excepteur sint</a></h5>
                <p className="product_descr"> Vivamus ante lorem, eleifend nec interdum non, ullamcorper et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>									
              </div>
              <div className="clearfix" />
            </div>
            <div className="product_price">
              <span className="price-access">$597.51</span>								
              <button className="button1"><span>Add to cart</span></button>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>	
      <div className="clearfix" />		
    </div>
  </div></div>

            </div>
        );
    }
}

export default PrDetail;