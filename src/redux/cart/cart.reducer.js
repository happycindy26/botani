import { removeItem } from "./cart.actions";
import CartActionTypes from "./cart.types";
import {addItemToCart, decreaseItemFromCart} from "./cart.utils";

const INITICIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITICIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
            }
        case CartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
        
}

export default cartReducer;