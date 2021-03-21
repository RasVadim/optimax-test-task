import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import store from "./Store/store";

import DefaultLayout from "./Layout";
import Cart from "../src/Pages/Cart";

function App() {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <DefaultLayout>
          <Route path="/" component={Cart} />
        </DefaultLayout>
      </Router>
    </Provider>
  );
}

export default App;
