const INITIAL_STATE = {
    isSignedIn : null,
    userId: null
}



export const loginReducer = (state = INITIAL_STATE, action) => {

    switch(action.type ) {
        case "SIGN_IN":
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn,
                userId: action.payload.userId
            }
        case "SIGN_OUT":
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn,
                userId: action.payload.userId
            }
        case "AUTH_STATE_CHANGE":
            return {
                ...state,
                isSignedIn: action.payload.isSignedIn,
                userId: action.payload.userId
            }
          
        default:
            return state;
    }
}

// export default authReducer;