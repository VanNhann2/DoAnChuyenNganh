import * as types from '../constants/ActionType'
var data = JSON.parse(localStorage.getItem('CART'))

var initialState = [
    {
        product: {
            id: 1,
            name: 'Sony S4',
            image: 'https://icdn3.digitaltrends.com/image/canon-eos-6d-mark-ii-review-12-1500x1000.jpg',
            description: 'sản phẩm tốt nhất việt nam',
            price: 400,
            model: 'No 306D',
            inventory: 7
        },
        quantity: 3
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state]
        default: return [...state];
    }
}

export default cart;