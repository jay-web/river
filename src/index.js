import React from "react";
import ReactDOM from "react-dom";
import {Provider } from "react-redux";
import {createStore,  applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import CombineReducers from "../src/redux/root";


const middleware = [logger, thunk];



const store = createStore(CombineReducers, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector("#root"));
