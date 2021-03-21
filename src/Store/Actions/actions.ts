export enum actionKeys {
  SET_TO_CART = "SET_TO_CART",
  SET_TO_RECOMMENDED = "SET_TO_RECOMMENDED",
  ADD_TO_CART = "ADD_TO_CART",
  DELETE_FROM_CART = "DELETE_FROM_CART",
  FETCH_CART = "FETCH_CART",
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
  IS_CART_LOADING = "IS_CART_LOADING",
  S_RECOMMENDED_LOADING = "IS_RECOMMENDED_LOADING",
}

export const fetchCart = () => ({
  type: actionKeys.FETCH_CART,
});

export const isCartLoading = (payload: boolean) => ({
  type: actionKeys.IS_CART_LOADING,
  payload,
});

export const isRecommendedLoading = (payload: boolean) => ({
  type: actionKeys.S_RECOMMENDED_LOADING,
  payload,
});

export const setToCart = (payload: any[]) => ({
  type: actionKeys.SET_TO_CART,
  payload,
});

export const setToRecommended = (payload: any[]) => ({
  type: actionKeys.SET_TO_RECOMMENDED,
  payload,
});

export const changeQuantity = (payload: any) => ({
  type: actionKeys.CHANGE_QUANTITY,
  payload,
});

export const addToCart = (payload: any) => ({
  type: actionKeys.ADD_TO_CART,
  payload,
});

export const deleteFromCart = (payload: any) => ({
  type: actionKeys.DELETE_FROM_CART,
  payload,
});
