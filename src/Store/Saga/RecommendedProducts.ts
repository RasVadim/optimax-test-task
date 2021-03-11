import { put, takeLatest, all, call } from "redux-saga/effects";
import { FETCH_CART, setToRecommended, isRecommendedLoading } from "../Actions/actions";
import axios from "axios";

function* getRecommendedProducts() {
    yield put(isRecommendedLoading(true));

    // const response = yield axios.get(`https://fakestoreapi.com/products`).then((res) => res);
    // console.log(response);
    // if (response.status === 200) {
    //     yield put(isRecommendedLoading(false));
    //     yield put(setToRecommended(response.data.items));
    // } else {
    //     console.error("Recommended Products request error");
    // }
}

function* actionWatcher() {
    yield takeLatest(FETCH_CART, getRecommendedProducts);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
