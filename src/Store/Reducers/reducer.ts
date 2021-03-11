// import {
//   SET_TO_CART,
//   ADD_TO_CART,
//   DELETE_FROM_CART,
//   CHANGE_QUANTITY,
//   IS_CART_LOADING,
// } from "../Actions/actions";
//
// export const initialState = {
//   cartItems: [],
//   cartLoading: false,
//   total: 0,
// };
// export default function reducer(state = initialState, action) {
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


export const initialState = {
  cartItems: [],
  cartLoading: false,
  total: 0,
};
export default function reducer(state = initialState, action = { type: "" }) {
  switch (action.type) {
    default:
      return state;
  }
}
