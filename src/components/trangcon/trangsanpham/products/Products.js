import React, { Component } from 'react';
import Product from './Product';
class Products extends Component {
  render() {
    return (

        <div className="special">
          <div className="container">
            <h3>Special Offers</h3>
            <div className="specia-top">
              <ul className="grid_2">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <div className="clearfix"> </div>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Products;