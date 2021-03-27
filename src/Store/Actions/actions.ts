import {
  SetProductsAction,
  SetProductsLoadingAction,
  SetCartAction,
  SetCartLoadingAction,
  AddToCartAction,
  DeleteFromCartAction,
  FetchCartAction,
  ChangeQuantityAction,
  AddToCartLoadingAction,
  DeleteFromCartLoadingAction,
  ChangeQuantityLoadingAction,
  AddNewProductLoadingAction,
  AddNewProductAction,
  SetCurrentProductIdAction,
  FetchProductsAction,
  TotalSumLoadingAction,
} from "../interfaces";

export enum actionTypes {
  SET_PRODUCT_lIST = "SET_PRODUCT_lIST",
  FETCH_PRODUCT_lIST = "FETCH_PRODUCT_lIST",
  ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
  SET_CURRENT_PRODUCT_ID = "SET_CURRENT_PRODUCT_ID",
  SET_CART = "SET_CART",
  FETCH_CART = "FETCH_CART",
  ADD_TO_CART = "ADD_TO_CART",
  DELETE_FROM_CART = "DELETE_FROM_CART",
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
  SET_PRODUCTS_LOADING = "SET_PRODUCTS_LOADING",
  SET_CART_LOADING = "SET_CART_LOADING",
  ADD_TO_CART_LOADING = "ADD_TO_CART_LOADING",
  DELETE_FROM_CART_LOADING = "DELETE_FROM_CART_LOADING",
  CHANGE_QUANTITY_LOADING = "CHANGE_QUANTITY_LOADING",
  ADD_NEW_PRODUCT_LOADING = "ADD_NEW_PRODUCT_LOADING",
  TOTAL_SUM_LOADING = "TOTAL_SUM_LOADING",
}

export const fetchProductList = (): FetchProductsAction => ({
  type: actionTypes.FETCH_PRODUCT_lIST,
});

export const setProductList = (
  payload: SetProductsAction["payload"]
): SetProductsAction => ({
  type: actionTypes.SET_PRODUCT_lIST,
  payload,
});

export const addNewProduct = (
  payload: AddNewProductAction["payload"]
): AddNewProductAction => ({
  type: actionTypes.ADD_NEW_PRODUCT,
  payload,
});

export const setCurrentProductId = (
  payload: SetCurrentProductIdAction["payload"]
): SetCurrentProductIdAction => ({
  type: actionTypes.SET_CURRENT_PRODUCT_ID,
  payload,
});

export const fetchCart = (): FetchCartAction => ({
  type: actionTypes.FETCH_CART,
});

export const setCart = (payload: SetCartAction["payload"]): SetCartAction => ({
  type: actionTypes.SET_CART,
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

export const changeQuantity = (
  payload: ChangeQuantityAction["payload"]
): ChangeQuantityAction => ({
  type: actionTypes.CHANGE_QUANTITY,
  payload,
});

export const setProductLoading = (
  payload: SetProductsLoadingAction["payload"]
): SetProductsLoadingAction => ({
  type: actionTypes.SET_PRODUCTS_LOADING,
  payload,
});

export const addNewProductLoading = (
  payload: AddNewProductLoadingAction["payload"]
): AddNewProductLoadingAction => ({
  type: actionTypes.ADD_NEW_PRODUCT_LOADING,
  payload,
});

export const setCartLoading = (
  payload: SetCartLoadingAction["payload"]
): SetCartLoadingAction => ({
  type: actionTypes.SET_CART_LOADING,
  payload,
});

export const addToCartLoading = (
  payload: AddToCartLoadingAction["payload"]
): AddToCartLoadingAction => ({
  type: actionTypes.ADD_TO_CART_LOADING,
  payload,
});

export const deleteFromCartLoading = (
  payload: DeleteFromCartLoadingAction["payload"]
): DeleteFromCartLoadingAction => ({
  type: actionTypes.DELETE_FROM_CART_LOADING,
  payload,
});

export const changeQuantityLoading = (
  payload: ChangeQuantityLoadingAction["payload"]
): ChangeQuantityLoadingAction => ({
  type: actionTypes.CHANGE_QUANTITY_LOADING,
  payload,
});

export const totalSumLoading = (
  payload: TotalSumLoadingAction["payload"]
): TotalSumLoadingAction => ({
  type: actionTypes.TOTAL_SUM_LOADING,
  payload,
});
