import React from "react";

import StreamForm from "./streamForm";

import { connect } from "react-redux";
import { CreateStream } from "../../redux/actions/streams.actions";


class StreamCreate extends React.Component {
  
    onSubmit = (formValues) => {
       
        this.props.CreateStream(formValues);
    }

    render() {
        console.log(this.props); 
        return (
            <div className="container">
               <h3>Create Stream</h3>
               <StreamForm onSubmit={this.onSubmit}/>
            </div>
           
        )
    }
    
}

export default connect(null, { CreateStream })(StreamCreate);