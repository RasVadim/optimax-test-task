import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga/cart";
import cartReducer from "./Reducers/reducer";

const sagaMiddleware = createSagaMiddleware();

export default createStore(cartReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
