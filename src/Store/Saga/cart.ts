import { put, takeLatest, all, call } from "redux-saga/effects";
import { actionKeys, setToCart, isCartLoading } from "../Actions/actions";
import axios from "axios";

function* getCartItems() {
  yield put(isCartLoading(true));

  // @ts-ignore
  const response = yield axios.get(`../../fake_server/products.json`)
      .then((res) => res);
  console.log(response);
  if (response.status === 200) {
    yield put(isCartLoading(false));
    yield put(setToCart(response.data.items));
  } else {
    console.error("Cart Items request error");
  }
}

function* actionWatcher() {
  yield takeLatest(actionKeys.FETCH_CART, getCartItems);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
