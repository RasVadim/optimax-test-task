import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import {
  actionTypes,
  addNewProductLoading,
  fetchProductList,
  setProductList,
  setProductLoading,
} from "../Actions/actions";
import { AxiosResponse } from "axios";
import api from "../../utils/api";
import { AddNewProductAction } from "../interfaces";

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

function* addNewProduct(action: AddNewProductAction) {
  try {
    yield put(addNewProductLoading(true));

    const response: AxiosResponse = yield call(() =>
      api.post(
        `/products${process.env.REACT_APP_SERVER_FORMAT}`,
        action.payload
      )
    );
    if (response.data) {
      yield put(fetchProductList());
    }
  } catch (e) {
    console.error(e.message);
  } finally {
    yield put(addNewProductLoading(false));
  }
}

//watchers
export default function* productsActionWatcher(): Generator<StrictEffect> {
  yield takeLatest(actionTypes.FETCH_PRODUCT_lIST, getProductList);
  yield takeLatest(actionTypes.ADD_NEW_PRODUCT, addNewProduct);
}
