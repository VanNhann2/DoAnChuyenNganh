import React, { Component } from 'react';
import Search from './Search';



class Products extends Component {
  render() {

    return (

      <div className="special">
        <div className="container">
          <h3>New Products</h3>
          <Search />
          <div className="specia-top">
            <ul className="grid_2">
              {this.props.children}
              <div className="clearfix"> </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default Products;