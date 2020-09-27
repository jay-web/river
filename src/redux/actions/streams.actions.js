import StreamAxios from "../../axios/streamAxios";
import history from "../../history";
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
 } from "./actions.types";


 // * Action for create new stream
export const CreateStream = (formValues) => {
    return async function(dispatch, getState) {
        const userId = getState().user.userId;
        const response = await StreamAxios.post("/streams", {...formValues, userId } );

        dispatch({ type : CREATE_STREAM, payload : response.data});
        history.push("/");
    }
}

// * Action to read/fetch all streams
export const FetchStreams = () => {
    return async function(dispatch) {
        const response = await StreamAxios.get("/streams");

        dispatch({ type: FETCH_STREAMS, payload: response.data});
    }
}

// * Action to Fetch single stream
export const FetchStream = (id) => {
    return async function(dispatch) {
        const response = await StreamAxios.get(`/streams/${id}`);

        dispatch({ type: FETCH_STREAM, payload : response.data});
    }
}

// * Action to Edit Single stream
export const EditStream = (id, editValues) => {
    return async function(dispatch) {
        const response = await StreamAxios.put(`/streams/${id}`, editValues);

        dispatch({ type: EDIT_STREAM, payload: response.data});
    }
}

// * Action to delete Single stream
export const DeleteStream = (id) => {
    return async function(dispatch) {
        await StreamAxios.delete(`/streams/${id}`);

        dispatch({type: DELETE_STREAM, payload: id});
    }
}