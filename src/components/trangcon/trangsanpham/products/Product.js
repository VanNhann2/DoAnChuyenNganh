import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from "react-router-dom";

class Product extends Component {
    render() {
        var { product } = this.props
        return (
            <li>
                <Link to ="/detail"><img src={product.image} className="img-responsive" alt={product.name}/></Link>
                <div className="special-info grid_1 simpleCart_shelfItem">
                    <h5>{ product.name }</h5>
                    <h6>{ product.description }</h6>
                    {/* <ul className="rating rating-item">
                        <li className="rating rating-item">
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>

                    </ul> */}
                    <div className="item_add"><span className="item_price"><h6>ONLY ${product.price}</h6></span></div>
                    <div className="item_add"><span className="item_price"><Link to="/checkout">add to cart</Link></span></div>
                </div>
            </li>
        );
    }
}

export default Product;