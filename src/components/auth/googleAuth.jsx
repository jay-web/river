import React from "react";
import "./googleAuth.styles.scss";

import CustomButton from "../customButton/custom-button";

class GoogleAuth extends React.Component {
    constructor() {
        super();

        this.state = {
            isSignedIn: null
        }
    }
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
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    }

    userSignIn = () => {
        console.log("tesing");
        this.auth.signIn();
    }

    userSignOut= () => {
        console.log("tesing");
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
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

export default GoogleAuth;