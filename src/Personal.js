import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { H1, Form, FormGroup, Error, Label, Input, Select, FormBody, Button } from './styles'

const states = ["Maharashtra", "Gujarat", "MadhyaPradesh"]

let validate = (values) => {
    let errors = {}
    if (!values.firstName) {
        errors.firstName = "*Required"
    } if (!values.lastName) {
        errors.lastName = "*Required"
    }
    if (!values.dateOfBirth) {
        errors.dateOfBirth = '*Required'
    } else if (new Date(values.dateOfBirth) > new Date()) {
        errors.dateOfBirth = 'Please select appriopriate date'
    }
    if (!values.gender) {
        errors.gender = "*Required"
    }
    if (!values.state) {
        errors.state = "*Required"
    }
    return errors

}

let renderInput = ({ input, meta, label, type }) => {
    return (<FormGroup >
        <Label>{label}</Label>
        <Input {...input} type={type} />
        {meta.touched && meta.error && <Error>{meta.error} </Error>}
    </FormGroup>
    )
}

let renderSelect = ({ input, meta, label }) => {
    return (
        <FormGroup>
            <Label>{label}</Label>
            <Select {...input}>
                <option></option>
                {states.map((_) => {
                    return (
                        <option key={_} value={_} >{_}</option>
                    )
                })}
            </Select>
            {meta.touched && meta.error ? (<Error>{meta.error}</Error>) : ""}
        </FormGroup>
    )
}

let renderError = ({ meta }) => {
    return (
        <Error>
            {meta.touched && meta.error ? meta.error : ""}
        </Error>
    )
}


let PersonalDetails = (props) => {
    let { handleSubmit } = props


    return (
        <FormBody>
            <Form onSubmit={handleSubmit((vals) => { props.history.push('/employment') })}>
                <H1> Personal Details</H1>
                <Field name="firstName" label="First Name" type="text" component={renderInput} />
                <Field name="lastName" label="Last Name" type="text" component={renderInput} />
                <Field name="dateOfBirth" label="Date of Birth" type="date" component={renderInput}></Field>
                <FormGroup>
                    <Label>Gender -</Label>
                    <Label><Field name="gender" type="radio" label='Male' component="input" value="male"></Field>
                 Male </Label>
                    <Label><Field name="gender" component="input" label="Female" type="radio" value="female"></Field>
                 Female </Label>
                    <Field name='gender' component={renderError} />
                </FormGroup>
                <Field name="state" label="Select State" component={renderSelect}></Field>
                <br />
                <Button primary type="submit" > Save And Proceed</Button>


            </Form>
        </FormBody>
    )
}

PersonalDetails = reduxForm({
    form: 'personal',
    destroyOnUnmount: false,
    validate
})(PersonalDetails)

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(PersonalDetails)