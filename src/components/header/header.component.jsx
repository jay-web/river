import React from "react";
import {Link } from "react-router-dom";
import "./header.styles.scss";
import GoogleAuth from "../auth/googleAuth";

const Header = () => {
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


export default Header;