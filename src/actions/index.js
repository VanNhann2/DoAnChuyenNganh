import * as types from '../constants/ActionType'
import Product from '../components/trangcon/trangsanpham/products/Product';

export const actAddToCart = (product, quantity) => {
    return{
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}