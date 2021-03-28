import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import {
  AddToCartAction,
  ChangeQuantityAction,
  DeleteFromCartAction,
} from "../interfaces";
import {
  actionTypes,
  addToCartLoading,
  changeQuantityLoading,
  deleteFromCartLoading,
  fetchCart,
  setCart,
  setCartLoading,
} from "../Actions/actions";
import api from "../../utils/api";

//workers
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
    yield put(addToCartLoading(true));

    const response: AxiosResponse = yield call(() =>
      api.post(`/cart${process.env.REACT_APP_SERVER_FORMAT}`, action.payload)
    );
    if (response.data) {
      yield put(fetchCart());
    }
  } catch (e) {
    console.error(e.message);
  } finally {
    yield put(addToCartLoading(false));
  }
}

function* deleteFromCart(action: DeleteFromCartAction) {
  try {
    yield put(deleteFromCartLoading(true));

    const response: AxiosResponse = yield call(() =>
      api.delete(
        `/cart${process.env.REACT_APP_SERVER_FORMAT}/${action.payload}`
      )
    );
    if (response.data) {
      yield put(fetchCart());
    }
  } catch (e) {
    console.error(e.message);
  } finally {
    yield put(deleteFromCartLoading(false));
  }
}

function* changeQuantity(action: ChangeQuantityAction) {
  try {
    yield put(changeQuantityLoading(true));

    const response: AxiosResponse = yield call(() =>
      api.put(
        `/cart${process.env.REACT_APP_SERVER_FORMAT}/${action.payload.id}`,
        action.payload
      )
    );
    if (response.data) {
      yield put(fetchCart());
    }
  } catch (e) {
    console.error(e.message);
  } finally {
    yield put(changeQuantityLoading(false));
  }
}

//watchers
export default function* cartActionWatcher(): Generator<StrictEffect> {
  yield takeLatest(actionTypes.FETCH_CART, getCart);
  yield takeLatest(actionTypes.ADD_TO_CART, addToCart);
  yield takeLatest(actionTypes.DELETE_FROM_CART, deleteFromCart);
  yield takeLatest(actionTypes.CHANGE_QUANTITY, changeQuantity);
}
