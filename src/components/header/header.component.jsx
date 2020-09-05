import React from "react";
import {Link } from "react-router-dom";
import "./header.styles.scss";

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
            <Link to="/login">
                Login
            </Link>
            </div>

           
        </div>
    )
}


export default Header;