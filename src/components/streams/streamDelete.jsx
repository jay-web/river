import React from "react";
import Model from "../model/model";
import { connect } from "react-redux";
import {Button } from "react-bootstrap";
import { FetchStream , DeleteStream} from "../../redux/actions/streams.actions";

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.FetchStream(this.props.match.params.id);
    }

    onDelete = () => {
        this.props.DeleteStream(this.props.match.params.id);
    }

    renderAction = () => {
        return (
            <React.Fragment>
                 <Button 
                    variant="danger"
                    onClick={this.onDelete}
                    >Delete</Button>
         
                 <Button
                    onClick={() => this.props.history.push("/")}
                    >Cancel</Button>
            </React.Fragment>
        )
    }
  render() {
    const { stream } = this.props;
    if(!stream){
        return <div>Loading ....</div>
    }
    return (
      <div>
        <Model 
            title={stream.title} 
            description={stream.description}
            actions={this.renderAction()}
             />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return { stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {FetchStream, DeleteStream})(StreamDelete);
