import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CartItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }
    render() {
        var { item } = this.props
        var {quantity} = item.quantity > 0 ? item : this.state
        return (
            <div className="cart-header">
                <div className="close">
                    <i className="fas fa-window-close"
                        onClick={() => this.onDeleteProduct(item.product)}
                    />
                </div>
                <div className="cart-sec simpleCart_shelfItem">
                    <div className="cart-item cyc">
                        <img src={item.product.image} className="img-responsive" alt={item.product.name} />
                    </div>
                    <div className="cart-item-info">
                        <h3>
                            {/* <a href="/detail">Mountain Hopper(XS R034)</a><span>Model No: 3578</span> */}
                            <Link to="/detail">{item.product.name}</Link><span>{item.product.model}</span>
                        </h3>
                        <ul className="qty">
                            {/* <li><p>Size : 5</p></li>  PHẢI CÓ THÊM SỐ LƯỢNG TẠI ĐÂY..........................................................*/}
                            <li><p>Số lượng mua: {quantity}</p></li> <br />
                            <li><p>Tổng tiền: {this.totalMoney(item.product.price, item.quantity)}</p></li>
                            <button className="btn btn-warning"
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}>
                                -</button>

                            <button className="btn btn-danger"
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}>
                                +</button>
                        </ul>
                        <div className="delivery">
                            <p>Service Charges : Rs.100.00</p>
                            <span>Delivered in 2-3 bussiness days</span>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0){
            this.setState({
                quantity: quantity
            })
            this.props.onUpdateProductInCart(product, quantity)
        }
    }



    onDeleteProduct = (product)  => {
        var { onDeleteProductInCart } = this.props
        onDeleteProductInCart(product)

    }

    totalMoney = (price, quantity) => {
        return price * quantity
    }
}

export default CartItem;