import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { render, fireEvent, screen } from "@testing-library/react";

import * as actions from "../../Store/Actions/actions";
import { cartState } from "../../Store/Reducers/cart";
import { productsState } from "../../Store/Reducers/products";
import { reducer as form } from "redux-form";
import ProductCard from "./index";

jest.mock("../../Store/Actions/actions");

const mockStore = createMockStore([]);
const mockedActions = actions;
const mockFunction = jest.fn();

const product = {
  id: 1,
  title: "Test Phone",
  description: "Test Description",
  price: 500,
  img:
    "https://rarephones.ru/image/cache/catalog/products/nokia/nokia3310/nokia3310-488x488.jpg",
  quantity: 3,
};

let store = mockStore({
  products: productsState,
  cart: cartState,
  form,
});
store.dispatch = jest.fn();

describe("ProductCard", () => {
  it("Renders title, description, quantity and price in the cart", () => {
    render(
      <Provider store={store}>
        <ProductCard
          product={product}
          fontSize={16}
          inCart
          onButtonClick={mockFunction}
        />
      </Provider>
    );

    expect(screen.getByText(product.title)).toBeTruthy();
    expect(screen.getByText(product.description)).toBeTruthy();
    expect(screen.getByText(/500$/i)).toBeTruthy();
    expect(screen.getByText(/Remove/i)).toBeTruthy();
    expect(screen.getByText("-")).toBeTruthy();
    expect(screen.getByText("+")).toBeTruthy();
    expect(screen.queryByText(/Add to cart/i)).toBeNull();
  });

  it("should call action on remove/addToCart button click", () => {
    render(
      <Provider store={store}>
        <ProductCard
          product={product}
          fontSize={16}
          inCart
          onButtonClick={mockFunction}
        />
      </Provider>
    );
    fireEvent.click(screen.getByText("Remove"));
    expect(mockedActions.setCurrentProductId).toHaveBeenCalledTimes(1);
    expect(mockedActions.setCurrentProductId).toHaveBeenCalledWith(product.id);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(product.id);
  });

  it("Renders title, description, quantity and price outside of the cart", () => {
    render(
      <Provider store={store}>
        <ProductCard
          product={product}
          fontSize={16}
          onButtonClick={mockFunction}
        />
      </Provider>
    );
    expect(screen.getByText(product.title)).toBeTruthy();
    expect(screen.getByText(product.description)).toBeTruthy();
    expect(screen.getByText(/500$/i)).toBeTruthy();
    expect(screen.getByText(/Add to cart/i)).toBeTruthy();
    expect(screen.queryByText(/Remove/i)).toBeNull();
    expect(screen.queryByText("-")).toBeNull();
    expect(screen.queryByText("+")).toBeNull();
  });
});
