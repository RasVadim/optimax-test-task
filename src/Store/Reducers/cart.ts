import { actionTypes } from "../Actions/actions";
import { Action, CartState } from "../interfaces";

export const cartState: CartState = {
  cart: [],
  cartSum: 0,
  loading: {
    cart: false,
    addItemCart: false,
    deleteItemCart: false,
    quantity: false,
    total: false,
  },
};

const cartsReducer = (state = cartState, action: Action): CartState => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.SET_CART_LOADING:
      return {
        ...state,
        loading: { ...state.loading, cart: action.payload },
      };
    case actionTypes.ADD_TO_CART_LOADING:
      return {
        ...state,
        loading: { ...state.loading, addItemCart: action.payload },
      };
    case actionTypes.DELETE_FROM_CART_LOADING:
      return {
        ...state,
        loading: { ...state.loading, deleteItemCart: action.payload },
      };
    case actionTypes.CHANGE_QUANTITY_LOADING:
      return {
        ...state,
        loading: { ...state.loading, quantity: action.payload },
      };
    case actionTypes.TOTAL_SUM_LOADING:
      return {
        ...state,
        loading: { ...state.loading, total: action.payload },
      };

    default:
      return state;
  }
};

export default cartsReducer;
