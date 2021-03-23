import { actionTypes } from "./Actions/actions";

export type Action = setProductsAction | fetchProductAction | setProductsLoadingAction

export interface ProductsState {
  loading: boolean;
  products: Product[];
  cart: CartItem[];
  cartSum: number
}

export interface Product {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly img: string;
}

export interface CartItem {
  id: number;
  quantity: number;
}

export interface setProductsAction {
  type: actionTypes.SET_PRODUCT_lIST;
  payload: Product[];
}

export interface fetchProductAction {
  type: actionTypes.FETCH_PRODUCT_lIST;
}

export interface setProductsLoadingAction {
  type: actionTypes.SET_PRODUCT_LOADING;
  payload: boolean;
}