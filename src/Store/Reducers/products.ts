import { actionTypes } from "../Actions/actions";
import { Action, ProductsState } from "../interfaces";

const cart = localStorage.getItem("cart");

export const productsState: ProductsState = {
  products: [],
  productLoading: false,
  cartLoading: false,
  cart: cart ? JSON.parse(cart) : [],
  cartSum: 0,
};

const productsReducer = (
  state = productsState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_lIST:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.SET_PRODUCT_LOADING:
      return {
        ...state,
        productLoading: action.payload,
      };
    case actionTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.SET_CART_LOADING:
      return {
        ...state,
        cartLoading: action.payload,
      };
    // case actionTypes.ADD_TO_CART:
    //   return {
    //     ...state,
    //     // cart: [...state.cart, payload],
    //   };

    default:
      return state;
  }
};

export default productsReducer;
