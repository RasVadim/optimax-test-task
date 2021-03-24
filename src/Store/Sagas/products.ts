import { put, takeLatest, all, call, StrictEffect } from "redux-saga/effects";
import {
  actionTypes,
  setProductLoading,
  fetchCart,
  setProductList,
  setCartLoading,
  setCart,
} from "../Actions/actions";
import axios, { AxiosResponse } from "axios";
import api from "../../utils/api";
import {Action, AddToCartAction, CartItem, DeleteFromCartAction} from "../interfaces";

// function* getCartItems() {
//   yield put(isCartLoading(true));
//
//   // @ts-ignore
//   const response = yield axios
//     .get(`../../fake_server/products.json`)
//     .then((res) => res);
//   console.log(response);
//   if (response.status === 200) {
//     yield put(isCartLoading(false));
//     yield put(setToCart(response.data.items));
//   } else {
//     console.error("Cart Items request error");
//   }
// }

//workers
function* getProductList() {
  try {
    yield put(setProductLoading(true));

    const response: AxiosResponse = yield call(() =>
      api.get(`/products${process.env.REACT_APP_SERVER_FORMAT}`)
    );
    yield put(setProductList(response.data));
  } catch (e) {
    console.error(e.message);
  } finally {
    yield put(setProductLoading(false));
  }
}

function* getCart() {
  try {
    yield put(setCartLoading(true));

    const response: AxiosResponse = yield call(() =>
      api.get(`/cart${process.env.REACT_APP_SERVER_FORMAT}`)
    );
    yield put(setCart(response.data));
  } catch (e) {
    console.error(e.message);
  } finally {
    yield put(setCartLoading(false));
  }
}

function* addToCart(action: AddToCartAction) {
  try {
    const response: AxiosResponse = yield call(() =>
      api.post(`/cart${process.env.REACT_APP_SERVER_FORMAT}`, action.payload)
    );
    if (response.data) {
      yield put(fetchCart());
    }
  } catch (e) {
    console.error(e.message);
  }
}

function* deleteFromCart(action: DeleteFromCartAction) {
  try {
    const response: AxiosResponse = yield call(() =>
        api.delete(`/cart${process.env.REACT_APP_SERVER_FORMAT}/${action.payload}`)
    );
    if (response.data) {
      yield put(fetchCart());
    }
  } catch (e) {
    console.error(e.message);
  }
}

//watchers
export default function* actionWatcher(): Generator<StrictEffect> {
  yield takeLatest(actionTypes.FETCH_PRODUCT_lIST, getProductList);
  yield takeLatest(actionTypes.FETCH_CART, getCart);
  yield takeLatest(actionTypes.ADD_TO_CART, addToCart);
  yield takeLatest(actionTypes.DELETE_FROM_CART, deleteFromCart);
}
