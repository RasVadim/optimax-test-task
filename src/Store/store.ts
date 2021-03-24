import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "./Sagas/rootSaga";
import rootReducer from "./Reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware, logger];
if (process.env.NODE_ENV !== "development") {
  middleware = [sagaMiddleware];
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
