import React from "react";
import ReactDOM from "react-dom";
import "./model.styles.css"
// import ReactDOM from "react-dom";

// import { Modal, Button } from "react-bootstrap";

const Model = (props) => {
  return ReactDOM.createPortal(
      <div className="model">
          <div className="model-body">
              <h1>Delete Stream</h1>
              <h2>{props.title}</h2>
              <p>{props.description}</p>
              {props.actions}
          </div>
      </div>,
      document.querySelector("#modal")
  )
  
};

export default Model;
