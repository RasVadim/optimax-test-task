import React from "react";
import { Provider } from "react-redux";

import store from "./Store/store";

import DefaultLayout from "./Layout";

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout />
    </Provider>
  );
}

export default App;
