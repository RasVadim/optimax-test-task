import {
  SetProductsAction,
  SetProductsLoadingAction,
  SetCartAction,
  SetCartLoadingAction,
  AddToCartAction,
  DeleteFromCartAction,
  FetchCartAction,
} from "../interfaces";

export enum actionTypes {
  SET_PRODUCT_lIST = "SET_PRODUCT_lIST",
  FETCH_PRODUCT_lIST = "FETCH_PRODUCT_lIST",
  SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING",
  SET_CART = "SET_CART",
  FETCH_CART = "FETCH_CART",
  SET_CART_LOADING = "SET_CART_LOADING",
  ADD_TO_CART = "ADD_TO_CART",
  DELETE_FROM_CART = "DELETE_FROM_CART",
}

export const fetchProductList = () => ({
  type: actionTypes.FETCH_PRODUCT_lIST,
});

export const setProductList = (
  payload: SetProductsAction["payload"]
): SetProductsAction => ({
  type: actionTypes.SET_PRODUCT_lIST,
  payload,
});

export const setProductLoading = (
  payload: SetProductsLoadingAction["payload"]
): SetProductsLoadingAction => ({
  type: actionTypes.SET_PRODUCT_LOADING,
  payload,
});

export const fetchCart = (): FetchCartAction => ({
  type: actionTypes.FETCH_CART,
});

export const setCart = (payload: SetCartAction["payload"]): SetCartAction => ({
  type: actionTypes.SET_CART,
  payload,
});

export const setCartLoading = (
  payload: SetCartLoadingAction["payload"]
): SetCartLoadingAction => ({
  type: actionTypes.SET_CART_LOADING,
  payload,
});

export const addToCart = (
  payload: AddToCartAction["payload"]
): AddToCartAction => ({
  type: actionTypes.ADD_TO_CART,
  payload,
});

export const deleteFromCart = (
  payload: DeleteFromCartAction["payload"]
): DeleteFromCartAction => ({
  type: actionTypes.DELETE_FROM_CART,
  payload,
});
