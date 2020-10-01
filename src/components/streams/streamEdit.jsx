import React from "react";
import { connect } from "react-redux";
import { FetchStreams, EditStream } from "../../redux/actions/streams.actions";

import StreamForm from "./streamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    
    this.props.FetchStreams();
  }
  onSubmit = (formValues) => {
    
    this.props.EditStream(this.props.match.params.id, formValues);
  }
  render() {
      const {stream } = this.props;
      if(!this.props.stream){
          return <div>Loading....</div>;
      }
   
    return (
      <div> 
        <h3>Edit Stream</h3>
        <StreamForm 
          onSubmit={this.onSubmit} 
          initialValues={{title: stream.title, description : stream.description}} />
      </div>
    )
  }
}

const mapStateToProp = (state, getProps) => {

  return { stream: state.streams[getProps.match.params.id -1] };
};
export default connect(mapStateToProp, {FetchStreams, EditStream})(StreamEdit);
