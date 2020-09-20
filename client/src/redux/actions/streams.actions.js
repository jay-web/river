import StreamAxios from "../../axios/streamAxios";

export const CreateStream = (formValues) => {
    return function(dispatch) {
        StreamAxios.post("/streams", formValues)
    }
}