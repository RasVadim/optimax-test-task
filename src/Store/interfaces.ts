import { actionTypes } from "./Actions/actions";

export type Action =
  | SetProductsAction
  | SetCurrentProductIdAction
  | SetCartAction
  | SetProductsLoadingAction
  | AddNewProductLoadingAction
  | SetCartLoadingAction
  | AddToCartLoadingAction
  | DeleteFromCartLoadingAction
  | ChangeQuantityLoadingAction
  | TotalSumLoadingAction;

export interface ProductsState {
  products: Product[];
  currentProductId: number | null;
  loading: {
    products: boolean;
    addProduct: boolean;
  };
}

export interface CartState {
  cart: CartItem[];
  cartSum: number;
  loading: {
    cart: boolean;
    addItemCart: boolean;
    deleteItemCart: boolean;
    quantity: boolean;
    total: boolean;
  };
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

export interface SetCurrentProductIdAction {
  type: actionTypes.SET_CURRENT_PRODUCT_ID;
  payload: number;
}

export interface SetCartAction {
  type: actionTypes.SET_CART;
  payload: CartItem[];
}

export interface SetProductsLoadingAction {
  type: actionTypes.SET_PRODUCTS_LOADING;
  payload: boolean;
}

export interface SetCartLoadingAction {
  type: actionTypes.SET_CART_LOADING;
  payload: boolean;
}

export interface AddToCartLoadingAction {
  type: actionTypes.ADD_TO_CART_LOADING;
  payload: boolean;
}

export interface DeleteFromCartLoadingAction {
  type: actionTypes.DELETE_FROM_CART_LOADING;
  payload: boolean;
}

export interface ChangeQuantityLoadingAction {
  type: actionTypes.CHANGE_QUANTITY_LOADING;
  payload: boolean;
}

export interface AddNewProductLoadingAction {
  type: actionTypes.ADD_NEW_PRODUCT_LOADING;
  payload: boolean;
}

export interface TotalSumLoadingAction {
  type: actionTypes.TOTAL_SUM_LOADING;
  payload: boolean;
}

// SagaActions
export interface FetchProductsAction {
  type: actionTypes.FETCH_PRODUCT_lIST;
}

export interface FetchCartAction {
  type: actionTypes.FETCH_CART;
}

export interface AddNewProductAction {
  type: actionTypes.ADD_NEW_PRODUCT;
  payload: Partial<Product>;
}

export interface AddToCartAction {
  type: actionTypes.ADD_TO_CART;
  payload: CartItem;
}

export interface DeleteFromCartAction {
  type: actionTypes.DELETE_FROM_CART;
  payload: number;
}

export interface ChangeQuantityAction {
  type: actionTypes.CHANGE_QUANTITY;
  payload: Partial<CartItem>;
}
