import React, { Component } from 'react';



class Products extends Component {
  render() {

    return (

        <div className="special">
          <div className="container">
            <h3>Special Offers</h3>
            <div className="specia-top">
              <ul className="grid_2">
                { this.props.children }
                <div className="clearfix"> </div>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}


export default Products;