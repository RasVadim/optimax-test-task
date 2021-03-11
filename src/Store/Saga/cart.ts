import { put, takeLatest, all, call } from "redux-saga/effects";
import { FETCH_CART, setToCart, isCartLoading } from "../Actions/actions";
import axios from "axios";

function* getCartItems() {
    yield put(isCartLoading(true));

    // const response = yield axios.get(`https://fakestoreapi.com/carts`).then((res) => res);
    // console.log(response);
    // if (response.status === 200) {
    //     yield put(isCartLoading(false));
    //     yield put(setToCart(response.data.items));
    // } else {
    //     console.error("Cart Items request error");
    // }
}

function* actionWatcher() {
    yield takeLatest(FETCH_CART, getCartItems);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
