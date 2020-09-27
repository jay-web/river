import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchStreams } from "../../redux/actions/streams.actions";
import { Card, CardGroup, Button } from "react-bootstrap";
import "./stream.styles.css";

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
        
    }

    renderStreamCard(stream) {
        return (
          
            <Card style={{ width: '18rem', margin: '1rem' }} key={stream.id} bg="secondary" text="light">
                <Card.Body>
                    <Card.Title>{stream.title}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>  {stream.description} </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                    {this.renderAdminFeature(stream)}
                </Card.Body>
            </Card>
        )
    }

    renderAdminFeature = (stream) => {
        if(stream.userId === this.props.currentUserId){
            return (
                <div>
                    <Button style={{ marginRight: '1rem' }} variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </div>
               
            )
        }
       
    }

    renderCreateButton = () => {
        if(this.props.isSignedIn){
            return (
                <div className="createButton">
                    <Link 
                        to="/streams/new" 
                        style={{  color:"white", textDecoration:"none", }}> Create Stream</Link>
                </div>
            )
        }
    }
    render(){
        
        return (
           <div >
               
               <CardGroup className="listBox">
               {
                   this.props.streams.map((stream) => {
                       return this.renderStreamCard(stream)
                   })
               }
               </CardGroup>
            
               {this.renderCreateButton()}
           </div>
        )
    }
  
}

const mapStateToProp = (state) => {
    
    return { 
        streams : Object.values(state.streams),
        currentUserId : state.user.userId,
        isSignedIn: state.user.isSignedIn
    }
}

export default connect(mapStateToProp, {fetchStreams : FetchStreams })(StreamList);