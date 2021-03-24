import { actionTypes } from "./Actions/actions";

export type Action =
  | SetProductsAction
  | SetProductsLoadingAction
  | SetCartAction
  | SetCartLoadingAction
  | FetchProductsAction
  | FetchCartAction;

export interface ProductsState {
  products: Product[];
  productLoading: boolean;
  cart: CartItem[];
  cartLoading: boolean;
  cartSum: number;
}

export interface Product {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly img: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartItem {
  id: number;
  quantity: number;
}

// ReducerActions
export interface SetProductsAction {
  type: actionTypes.SET_PRODUCT_lIST;
  payload: Product[];
}

export interface SetProductsLoadingAction {
  type: actionTypes.SET_PRODUCT_LOADING;
  payload: boolean;
}

export interface SetCartAction {
  type: actionTypes.SET_CART;
  payload: CartItem[];
}

export interface SetCartLoadingAction {
  type: actionTypes.SET_CART_LOADING;
  payload: boolean;
}

// SagaActions
export interface FetchProductsAction {
  type: actionTypes.FETCH_PRODUCT_lIST;
}

export interface FetchCartAction {
  type: actionTypes.FETCH_CART;
}

export interface AddToCartAction {
  type: actionTypes.ADD_TO_CART;
  payload: CartItem;
}

export interface DeleteFromCartAction {
  type: actionTypes.DELETE_FROM_CART;
  payload: number;
}
