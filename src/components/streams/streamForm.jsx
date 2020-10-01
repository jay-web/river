import React from "react";
import { Field, reduxForm } from "redux-form"; 
import { Form, Button, Alert } from "react-bootstrap";

class StreamForm extends React.Component {
    // * Below input, label and meta we are receiving through redux form library
    renderInput = ({ input, label, meta }) => {
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

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
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



const formWrapped =  reduxForm({
    form : 'streamForm',
    validate: validate
})(StreamForm)


export default formWrapped;