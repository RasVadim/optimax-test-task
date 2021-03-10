import { createStore, applyMiddleware } from "redux";
import cartReducer from "./Reducers/reducer";

export default createStore(cartReducer);
