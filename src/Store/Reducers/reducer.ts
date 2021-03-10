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
