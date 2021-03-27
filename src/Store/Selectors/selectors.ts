import { RootState } from "../store";
import { CartItem } from "../interfaces";

export const getCartState = (state: RootState) => state.cart;
export const getProductsState = (state: RootState) => state.products;
export const getCurrentProduct = (state: RootState) =>
  state.products.currentProductId;
export const getCartTotalSum = (state: RootState) =>
  state.cart.cart.reduce((total: number, { price, quantity }: CartItem) => {
    total = total + price * quantity;
    return total;
  }, 0);

export const checkInCartProduct = (id: number) => (state: RootState) =>
  state.cart.cart.find((product) => product.id === id);
export const getCounterValueById = (counterId: string) => (state: RootState) =>
  +state.form.CounterForm?.values?.[counterId];
