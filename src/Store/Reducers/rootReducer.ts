import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  products,
  cart,
  form,
});

export default rootReducer;
