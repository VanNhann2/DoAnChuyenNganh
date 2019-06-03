import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../components/trangcon/trangsanpham/cart/Cart'
import * as Message from '../constants/Message'
import CartItem from '../components/trangcon/trangsanpham/cart/CartItem';
class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
      </Cart>
    )

  }

  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
          />
        );
      });
    }
    return result
  }


}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      model: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired

}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CartContainer);