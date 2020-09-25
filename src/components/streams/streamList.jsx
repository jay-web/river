import React from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../redux/actions/streams.actions";

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }
    render(){
        return (
            <div> StreamList</div>
        )
    }
  
}

export default connect(null, {fetchStreams : FetchStreams })(StreamList);