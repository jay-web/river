import _ from "lodash";

import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from "../actions/actions.types";

const StreamReducer =  (state = {}, action) => {
    switch(action.type){
        case FETCH_STREAM :
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case CREATE_STREAM :
            return {
                ...state,
                [action.payload.id]:action.payload
            }
        case EDIT_STREAM:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case FETCH_STREAMS:
            return {
                ...state,
                ...action.payload
            }
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default :
            return state;
    }
}

export default StreamReducer;