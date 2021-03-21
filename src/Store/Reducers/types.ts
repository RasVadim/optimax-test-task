import { actionKeys } from "../Actions/actions";

export interface InitialState {
  items: object[];
  cartItems: object[];
  cartLoading: boolean;
  total: number;
}

export interface Action {
  type: actionKeys;
  payload?: any;
}
