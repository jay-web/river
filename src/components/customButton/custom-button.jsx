import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({title, ...otherprops}) => {
    return (
        <div className="button" {...otherprops}>
            <span>{title}</span>
        </div>
    )
}

export default CustomButton;