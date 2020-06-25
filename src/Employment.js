import React from "react";
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from "react-redux";

import { H1, Form, FormGroup, Error, Label, Input, Select, FormBody, Button} from './styles'


const units=["DX","IVS"]

let validate = (values) => {
    let errors = {}

    if (!values.empName) {
        errors.empName = "Required"
    }
    if (!values.empId) {
        errors.empId = "Required"
    }
    if (!values.dateOfJoining) {
        errors.dateOfJoining = "Required"
    } else if (new Date(values.dateOfJoining) > new Date()) {
        errors.dateOfJoining = 'Please select appriopriate date'
    }
    if (!values.postedUnit) {
        errors.postedUnit = "Required"
    }
    return errors
}

let renderInput = ({ input, meta, label, type }) => {
    if(type=="checkbox"){
        return (
            <FormGroup>
                <Label>{label} <input {...input} type={type} /> </Label>
            </FormGroup>
        )
    }
    return (<FormGroup >
        <Label>{label}-</Label>
        <Input {...input} type={type} />
        {meta.error && meta.touched && <Error>{meta.error} </Error>}
    </FormGroup>
    )
}

let renderSelect=({input, meta, label})=>{
    return(
        <FormGroup>
             <Label>{label} </Label>
            <Select {...input}>
            <option></option>
            {units.map((_)=>{
                return (
                    <option key={_} value={_} >{_}</option>
                )
            })}
            </Select>
            {meta.touched && meta.error?(<Error>{meta.error}</Error>):""} 
        </FormGroup>
    )
}

let Employment = (props) => {
    let { handleSubmit } = props
    return (
        <FormBody>
            <Form onSubmit={handleSubmit(() => { props.history.push('/review') })} >
                <H1>
                    Employment Details
            </H1>
                <Field name="empName" label="Employee Name" component={renderInput} />
                <Field name="empId" label="Employee ID" type='number' component={renderInput} />
                <Field name="dateOfJoining" label="Date of Joining" type="date" component={renderInput}></Field>
                <Field name="postedUnit" label="Posted Unit" component={renderSelect}></Field>

                <Field name="check1" label="Select if job level 4 or below" component={renderInput} type="checkbox"  ></Field>

                <Button primary type="submit" > Save And Proceed</Button>
                <br />            <br />


            </Form>
            </FormBody>
    )
}

Employment = reduxForm({
    form: 'employment',
    validate,
    destroyOnUnmount: false
})(Employment)

function mapStateToProps(state) {
    const formval = formValueSelector('employment')
    let values1 = formval(state, 'empName', 'empId')
    return {
        values1,
        state
    }
}

export default connect(mapStateToProps)(Employment)