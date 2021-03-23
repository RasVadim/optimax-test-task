import { ProductsState, Action } from "../interfaces";
import api from "../../utils/api";

export enum actionTypes {
  SET_PRODUCT_lIST = "SET_PRODUCT_lIST",
  SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING",
  FETCH_PRODUCT_lIST = "FETCH_PRODUCT_lIST",
  ADD_TO_CART = "ADD_TO_CART",
  DELETE_FROM_CART = "DELETE_FROM_CART",
}

// export const setMainState = (payload: Partial<ProductsState>): Action => ({
//   type: actionTypes.SET_MAIN_STATE,
//   payload,
// });

export const fetchProductList = () => ({
  type: actionTypes.FETCH_PRODUCT_lIST,
});

export const setProductList = (payload: any) => ({
  type: actionTypes.SET_PRODUCT_lIST,
  payload
});

export const setProductLoading = (payload: any) => ({
  type: actionTypes.SET_PRODUCT_LOADING,
  payload
});

export const addToCart = (payload: any) => ({
  type: actionTypes.ADD_TO_CART,
  payload,
});

export const deleteFromCart = (payload: any) => ({
  type: actionTypes.DELETE_FROM_CART,
  payload,
});
