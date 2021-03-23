import {actionTypes} from "../Actions/actions";
import {Action, ProductsState} from "../interfaces";

// export const productsState = {
//   cartItems: [],
//   cartLoading: false,
//   total: 0,
// };
// export default function reducer(state = productsState, action) {
//   switch (action.type) {
//     case SET_TO_CART:
//       return {
//         ...state,
//         cartItems: action.payload,
//       };
//     case IS_CART_LOADING:
//       return { ...state, cartLoading: action.payload };
//     case ADD_TO_CART:
//       const newItem = {
//         ...action.payload,
//         id: Math.random(),
//       };
//       return {
//         ...state,
//         cartItems: [newItem, ...state.cartItems],
//       };
//     case DELETE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((el) => el.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// }

const cart = localStorage.getItem("cart");

export const productsState: ProductsState = {
  products: [],
  cart: cart ? JSON.parse(cart) : [],
  cartSum: 0,
  loading: false,
};

const productsReducer = (
  state = productsState,
  action: Action
): ProductsState => {
  switch (action.type) {
    // case actionTypes.SET_MAIN_STATE:
    //   return {
    //     ...state,
    //     ...  payload,
    //   };
    case actionTypes.SET_PRODUCT_lIST:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.SET_PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload
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
