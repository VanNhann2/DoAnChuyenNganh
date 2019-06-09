import * as Types from '../constants/ActionType'
import Search from '../components/trangcon/trangsanpham/products/Search';
//import * as Message from '../constants/Message'

//var initialState = Message.MSG_WELCOME
var initialState = ''
var search = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH:
            //console.log(action); 
            console.log(state);
            
            return state;
        default: return state;
    }
}
export default search;