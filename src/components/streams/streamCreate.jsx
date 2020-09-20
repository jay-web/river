import React from "react";
import { Field, reduxForm } from "redux-form"; 
import { Form, Button, Alert } from "react-bootstrap";


class StreamCreate extends React.Component {
    renderInput = ({ input, label, meta }) => {
        console.log({meta});
        return (
                <Form.Group >
                    <Form.Label>{label}</Form.Label>
                    <Form.Control {...input} autoComplete="off" />
                    {this.renderError(meta)}
                </Form.Group>
        )
    }

    renderError(meta){
        if(meta.error && meta.touched){
            return (
                <Alert variant="danger">
                    {meta.error}
                </Alert>
            )
        }
    }

    onSubmit(formValues){
        console.log({formValues});
    }

    render() {
        console.log(this.props); 
        return (
            <div className="container">
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field name="title" component={this.renderInput} label="Enter Name" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
           
        )
    }
    
}

const validate = (formValues) => {
    let errors = {};

    if(!formValues.title ){
        errors.title = "Please enter valid title";
    }

    if(!formValues.description){
        errors.description = "Please enter some description"
    }

    return errors;
}



export default reduxForm({
    form : 'streamCreate',
    validate: validate
})(StreamCreate)