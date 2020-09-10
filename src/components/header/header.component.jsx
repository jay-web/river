import React from "react";
import {Link } from "react-router-dom";
import "./header.styles.scss";
import GoogleAuth from "../auth/googleAuth";

import { connect } from "react-redux";


class Header extends React.Component  {
    // componentDidMount(){
    //     this.props.callGoogleAuth();
    // }

    render() {
        return (
            <div className="header">
                <Link to="/">
                    River
                </Link>
                <div className="menuItem">
                <Link to="/">
                    Streams
                </Link>
                
                <GoogleAuth />
                </div>

            
            </div>
        )
    }
}



export default Header;