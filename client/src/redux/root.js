import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {loginReducer} from "./reducers/authReducer";

export default combineReducers ({
    user: loginReducer,
    form: formReducer
})