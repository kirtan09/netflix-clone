import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
