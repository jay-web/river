import React from "react";
import "./googleAuth.styles.scss";

import CustomButton from "../customButton/custom-button";
import { connect } from "react-redux";
import {toSignIn, toSignOut, onAuthStateChange} from "../../redux/actions/auth.actions";

class GoogleAuth extends React.Component {
   
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "566295050248-ulaapts1m1bqhoto4ooo7iutt0v8ng05.apps.googleusercontent.com",
                scope: 'email'
            }).then(()  => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthStatusChange();
            this.auth.isSignedIn.listen(this.onAuthStatusChange);
            
            })
        });  
    }


    onAuthStatusChange = () => {
        console.log(this.props);
        this.props.onAuthStateChange(
            this.auth.isSignedIn.get(), 
            this.auth.isSignedIn.get() ? this.auth.currentUser.get().getId() : null
            );
    }

    userSignIn = () => {
        this.props.toSignIn(this.auth);
    }

    userSignOut= () => {
   
        this.props.toSignOut(this.auth);
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return <CustomButton title="Sign Out"   onClick={this.userSignOut} />
           
        }else {
            return <CustomButton title="Sign In" onClick={this.userSignIn} />
        }
    }

    render() {
        
        return (
            <div className="color">{this.renderAuthButton()} </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log({state});
    return { isSignedIn: state.user.isSignedIn, userId: state.user.userId}
}
export default connect(mapStateToProps, {
    toSignIn: toSignIn,
    toSignOut: toSignOut,
    onAuthStateChange: onAuthStateChange
})(GoogleAuth);