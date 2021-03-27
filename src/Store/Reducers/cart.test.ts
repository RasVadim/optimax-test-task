import reducer, { cartState } from "./cart";
import { actionTypes } from "../Actions/actions";

describe("Cart reducer", () => {
  test("Testing SET_CART", () => {
    expect(
      reducer(cartState, {
        type: actionTypes.SET_CART,
        payload: [
          {
            id: 1,
            title: "Test Phone",
            description: "Test Description",
            price: 500,
            img:
              "https://rarephones.ru/image/cache/catalog/products/nokia/nokia3310/nokia3310-488x488.jpg",
            quantity: 3,
          },
        ],
      })
    ).toEqual({
      ...cartState,
      cart: [
        {
          id: 1,
          title: "Test Phone",
          description: "Test Description",
          price: 500,
          img:
            "https://rarephones.ru/image/cache/catalog/products/nokia/nokia3310/nokia3310-488x488.jpg",
          quantity: 3,
        },
      ],
    });
  });

  test("Testing SET_CART_LOADING", () => {
    expect(
      reducer(cartState, {
        type: actionTypes.SET_CART_LOADING,
        payload: true,
      })
    ).toEqual({
      ...cartState,
      loading: {
        ...cartState.loading,
        cart: true,
      },
    });
  });

  test("Testing ADD_TO_CART_LOADING", () => {
    expect(
      reducer(cartState, {
        type: actionTypes.ADD_TO_CART_LOADING,
        payload: true,
      })
    ).toEqual({
      ...cartState,
      loading: {
        ...cartState.loading,
        addItemCart: true,
      },
    });
  });

  test("Testing DELETE_FROM_CART_LOADING", () => {
    expect(
      reducer(cartState, {
        type: actionTypes.DELETE_FROM_CART_LOADING,
        payload: true,
      })
    ).toEqual({
      ...cartState,
      loading: {
        ...cartState.loading,
        deleteItemCart: true,
      },
    });
  });

  test("Testing CHANGE_QUANTITY_LOADING", () => {
    expect(
      reducer(cartState, {
        type: actionTypes.CHANGE_QUANTITY_LOADING,
        payload: true,
      })
    ).toEqual({
      ...cartState,
      loading: {
        ...cartState.loading,
        quantity: true,
      },
    });
  });

  test("Testing TOTAL_SUM_LOADING", () => {
    expect(
      reducer(cartState, {
        type: actionTypes.TOTAL_SUM_LOADING,
        payload: true,
      })
    ).toEqual({
      ...cartState,
      loading: {
        ...cartState.loading,
        total: true,
      },
    });
  });
});
