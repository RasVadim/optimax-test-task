import { all } from "redux-saga/effects";
import actionWatcher from "./products";

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
