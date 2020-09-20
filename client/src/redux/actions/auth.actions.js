// 


export const toSignIn = (auth) => {
    return async function getAuth(dispatch) {
            await auth.signIn();
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
    return async function getAuth(dispatch) {
               await auth.signOut();
               dispatch({
                   type: "SIGN_OUT", 
                   payload:  {
                    isSignedIn: auth.isSignedIn.get(),
                    userId: null
                }
            })
              
        
    }
}

export const onAuthStateChange = (isSignedIn, id) => {
    return  {
        type: "AUTH_STATE_CHANGE", 
        payload:  {
            isSignedIn : isSignedIn ,
            userId: id
        }
    }
    
}