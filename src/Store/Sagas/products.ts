import { put, takeLatest, all, call, StrictEffect } from "redux-saga/effects";
import {actionTypes, setProductLoading,  setProductList} from "../Actions/actions";
import axios, { AxiosResponse } from "axios";
import api from "../../utils/api";

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
    yield put(setProductLoading(true ));

    const response: AxiosResponse = yield call(() =>
      api.get(`/products${process.env.REACT_APP_SERVER_FORMAT}`)
    );
    yield put(setProductList( response.data ));
  } catch (e) {
    console.error(e.message);
  } finally {
    yield put(setProductLoading( false ));
  }
}

//watchers
export default function* actionWatcher(): Generator<StrictEffect> {
  yield takeLatest(actionTypes.FETCH_PRODUCT_lIST, getProductList);
}
