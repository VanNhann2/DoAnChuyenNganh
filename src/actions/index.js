import * as Types from '../constants/ActionType'
//import Product from '../components/trangcon/trangsanpham/products/Product';

export const actAddToCart = (product, quantity) => {
    return{
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}
