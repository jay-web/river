import React from "react";
import { connect } from "react-redux";
import { FetchStreams } from "../../redux/actions/streams.actions";
import { Card, CardGroup, Button } from "react-bootstrap";

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
    render(){
        
        return (
           <div>
               <CardGroup>
               {
                   this.props.streams.map((stream) => {
                       return this.renderStreamCard(stream)
                   })
               }
               </CardGroup>
           </div>
        )
    }
  
}

const mapStateToProp = (state) => {
    
    return { 
        streams : Object.values(state.streams),
        currentUserId : state.user.userId
    }
}

export default connect(mapStateToProp, {fetchStreams : FetchStreams })(StreamList);