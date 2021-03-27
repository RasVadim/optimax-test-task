import { actionTypes } from "../Actions/actions";
import { Action, ProductsState } from "../interfaces";

export const productsState: ProductsState = {
  products: [],
  currentProductId: null,
  loading: {
    products: false,
    addProduct: false,
  },
};

const productsReducer = (
  state = productsState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_lIST:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.SET_CURRENT_PRODUCT_ID:
      return {
        ...state,
        currentProductId: action.payload,
      };
    case actionTypes.SET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: { ...state.loading, products: action.payload },
      };
    case actionTypes.ADD_NEW_PRODUCT_LOADING:
      return {
        ...state,
        loading: { ...state.loading, addProduct: action.payload },
      };

    default:
      return state;
  }
};

export default productsReducer;
