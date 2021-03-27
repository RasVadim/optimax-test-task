import reducer, { productsState } from "./products";
import { actionTypes } from "../Actions/actions";

describe("Products reducer", () => {
  test("Testing SET_PRODUCT_lIST", () => {
    expect(
      reducer(productsState, {
        type: actionTypes.SET_PRODUCT_lIST,
        payload: [
          {
            id: 1,
            title: "Test Phone",
            description: "Test Description",
            price: 500,
            img:
              "https://rarephones.ru/image/cache/catalog/products/nokia/nokia3310/nokia3310-488x488.jpg",
          },
        ],
      })
    ).toEqual({
      ...productsState,
      products: [
        {
          id: 1,
          title: "Test Phone",
          description: "Test Description",
          price: 500,
          img:
            "https://rarephones.ru/image/cache/catalog/products/nokia/nokia3310/nokia3310-488x488.jpg",
        },
      ],
    });
  });

  test("Testing SET_CURRENT_PRODUCT_ID", () => {
    expect(
      reducer(productsState, {
        type: actionTypes.SET_CURRENT_PRODUCT_ID,
        payload: 12,
      })
    ).toEqual({
      ...productsState,
      currentProductId: 12,
    });
  });

  test("Testing SET_PRODUCTS_LOADING", () => {
    expect(
      reducer(productsState, {
        type: actionTypes.SET_PRODUCTS_LOADING,
        payload: true,
      })
    ).toEqual({
      ...productsState,
      loading: {
        ...productsState.loading,
        products: true,
      },
    });
  });

  test("Testing ADD_NEW_PRODUCT_LOADING", () => {
    expect(
      reducer(productsState, {
        type: actionTypes.ADD_NEW_PRODUCT_LOADING,
        payload: true,
      })
    ).toEqual({
      ...productsState,
      loading: {
        ...productsState.loading,
        addProduct: true,
      },
    });
  });
});
