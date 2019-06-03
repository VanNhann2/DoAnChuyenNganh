import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <li>
                <a href="details.html"><img src="images/9.jpg" className="img-responsive" alt="true" /></a>
                <div className="special-info grid_1 simpleCart_shelfItem">
                    <h5>Lorem ipsum dolor</h5>
                    <div className="item_add"><span className="item_price"><h6>ONLY $40.00</h6></span></div>
                    <div className="item_add"><span className="item_price"><a href="#">add to cart</a></span></div>
                </div>
            </li>
        );
    }
}

export default Product;