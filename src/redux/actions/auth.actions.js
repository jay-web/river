// 


export const toSignIn = (auth) => {
    return function getAuth(dispatch) {
            auth.signIn();
            dispatch({
                type: "SIGN_IN", 
                payload:  {
                    isSignedIn: auth.isSignedIn.get(),
                    userId: auth.currentUser.get().getId()
                }
            });
           
         
    }
}

export const toSignOut = (auth) => {
    return function getAuth(dispatch) {
                auth.signOut();
               dispatch({
                   type: "SIGN_OUT", 
                   payload:  {
                    isSignedIn: auth.isSignedIn.get(),
                    userId: null
                }
            })
              
        
    }
}

export const onAuthStateChange = (isSignedIn) => {
    return  {
        type: "AUTH_STATE_CHANGE", 
        payload:  isSignedIn
    }
    
}