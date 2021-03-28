import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";

import { cartState } from "../../Store/Reducers/cart";
import { productsState } from "../../Store/Reducers/products";
import { reducer as form } from "redux-form";
import ProductList from "./index";

const mockStore = createMockStore([]);

const products = [
  {
    id: 1,
    title: "Test Phone",
    description: "Test Description",
    price: 500,
    img:
      "https://rarephones.ru/image/cache/catalog/products/nokia/nokia3310/nokia3310-488x488.jpg",
    quantity: 3,
  },
];

let store = mockStore({
  products: productsState,
  cart: cartState,
  form,
});

describe("ProductList", () => {
  it("Renders title and products", () => {
    render(
      <Provider store={store}>
        <ProductList title={"TEST TITLE"} products={products} />
      </Provider>
    );
    expect(screen.getByText("TEST TITLE")).toBeTruthy();
    expect(screen.getByText(products[0].title)).toBeTruthy();
    expect(screen.getByText(products[0].description)).toBeTruthy();
    expect(screen.getByText(/500$/i)).toBeTruthy();
    expect(screen.queryByText("Cart is empty")).toBeNull();
    expect(screen.queryByText("Products are missing")).toBeNull();
  });

  it("Renders title without products in cart", () => {
    render(
      <Provider store={store}>
        <ProductList title={"TEST TITLE"} products={undefined} inCart />
      </Provider>
    );
    expect(screen.getByText("TEST TITLE")).toBeTruthy();
    expect(screen.getByText(/Cart is empty/i)).toBeTruthy();
    expect(screen.queryByText(products[0].title)).toBeNull();
    expect(screen.queryByText(products[0].description)).toBeNull();
    expect(screen.queryByText(/500$/i)).toBeNull();
  });

  it("Renders  without title and products outside of the cart", () => {
    render(
      <Provider store={store}>
        <ProductList products={undefined} />
      </Provider>
    );
    expect(screen.getByText(/Products are missing/i)).toBeTruthy();
    expect(screen.queryByText("TEST TITLE")).toBeNull();
    expect(screen.queryByText(products[0].title)).toBeNull();
    expect(screen.queryByText(products[0].description)).toBeNull();
    expect(screen.queryByText(/500$/i)).toBeNull();
  });
});
