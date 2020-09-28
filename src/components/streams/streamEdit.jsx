import React from "react";
import { connect } from "react-redux";
import { FetchStream } from "../../redux/actions/streams.actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.FetchStream(this.props.match.params.id);
  }
  render() {
      
      if(!this.props.stream[0]){
          return <div>Loading....</div>;
      }
     console.log(this.props.stream[0]);
    return <div> {this.props.stream.title}</div>;
  }
}

const mapStateToProp = (state, getProps) => {
  let streams = Object.values(state.streams);
  let streamToEdit = streams.filter((stream) => {
    return stream.id == getProps.match.params.id;
  });
  return { stream: streamToEdit };
};
export default connect(mapStateToProp, {FetchStream})(StreamEdit);
