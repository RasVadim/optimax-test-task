import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { render, fireEvent, screen } from "@testing-library/react";
import * as actions from "../../Store/Actions/actions";

import ProductCard from "./index";
import {cartState} from "../../Store/Reducers/cart";
import {productsState} from "../../Store/Reducers/products";
import { reducer as form } from "redux-form";

jest.mock("../../Store/Actions/actions");

const mockStore = createMockStore([]);
const mockedActions = actions;

const product = {
  id: 1,
  title: "Test Phone",
  description: "Test Description",
  price: 500,
  img:
    "https://rarephones.ru/image/cache/catalog/products/nokia/nokia3310/nokia3310-488x488.jpg",
  quantity: 3,
};

describe("ProductCard", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      products: productsState,
      cart: cartState,
      form
      // cart: [product]
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <ProductCard
          product={product}
          fontSize={16}
          inCart
          onButtonClick={jest.fn()}
        />
      // </Provider>
    );
  });

  it("Renders title, description, quantity and price", () => {
    expect(screen.getByText(product.title)).toBeTruthy();
    expect(screen.getByText(product.description)).toBeTruthy();
    expect(
      screen.getByText(/$500/i)
    ).toBeTruthy();
  });

  it("should call action on increment button click", () => {
    fireEvent.click(screen.getByText("+"));
    expect(mockedActions.changeQuantity).toHaveBeenCalledTimes(1);
    expect(mockedActions.changeQuantity).toHaveBeenCalledWith({
      id: 1,
      title: "Test Phone",
      description: "Test Description",
      price: 500,
      img:
        "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
      quantity: 4,
    });
  });

  it("should call action on decrement button click", () => {
    fireEvent.click(screen.getByText("-"));
    expect(mockedActions.changeQuantity).toHaveBeenCalledTimes(1);
    expect(mockedActions.changeQuantity).toHaveBeenCalledWith({
      id: 1,
      title: "Test Phone",
      description: "Test Description",
      price: 500,
      img:
        "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
      quantity: 3,
    });
  });

  it("should call action on remove button click", () => {
    fireEvent.click(screen.getByText("Remove"));
    expect(mockedActions.deleteFromCart).toHaveBeenCalledTimes(1);
    expect(mockedActions.deleteFromCart).toHaveBeenCalledWith({
      id: product.id,
    });
  });
});
