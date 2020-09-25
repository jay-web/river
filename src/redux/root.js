import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {loginReducer} from "./reducers/authReducer";
import streamReducer from "./reducers/streamReducer";

export default combineReducers ({
    user: loginReducer,
    form: formReducer,
    streams: streamReducer
})