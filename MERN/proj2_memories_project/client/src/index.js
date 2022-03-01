import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // So that we can access a state from anywhere
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // Thunk is a middleware that lets you call action creators that return a function instead of an action object

import reducers from "./reducers";
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
