import { all } from "redux-saga/effects";
import productsActionWatcher from "./products";
import cartActionWatcher from "./cart";

export default function* rootSaga() {
  yield all([productsActionWatcher(), cartActionWatcher()]);
}
