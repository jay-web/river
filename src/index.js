import React from "react";
import ReactDOM from "react-dom";
import {Provider } from "react-redux";
import {createStore,  applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import "./index.css";
import App from "./app";
import CombineReducers from "../src/redux/root";

const middleware = [logger];

const store = createStore(CombineReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector("#root"));
