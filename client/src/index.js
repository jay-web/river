import React from "react";
import ReactDOM from "react-dom";
import {Provider } from "react-redux";
import {createStore,  applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import "./index.css";
import App from "./app";
import CombineReducers from "../src/redux/root";


const middleware = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose ;

const store = createStore(CombineReducers, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector("#root"));
