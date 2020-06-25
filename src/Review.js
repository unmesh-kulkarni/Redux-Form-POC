import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formValueSelector } from 'redux-form'




let Review = (props) => {
    return (
        <div className="jumbotron text-center">
            <h1>Review Page</h1>
            <br />
            <div>
                <h3>
                    Personal Details &nbsp;&nbsp;
                    <Link to='/personal'>
                        <button type='button' className='btn btn-sm btn-info'> *Edit</button>
                    </Link>
                </h3>
                <div>
                    First Name - <input value={props.personalDetails.firstName} disabled></input> 
                </div>
                <div>
                    Last Name - <input value={props.personalDetails.lastName} disabled></input> 
                </div>
                <div>
                    Date Of Birth  - <input value={props.personalDetails.dateOfBirth} disabled></input> 
                </div>
                <div>
                    Gender - <input value={props.personalDetails.gender} disabled></input> 
                </div>
                
            </div>
            <div>
                <h3>
                    Employment Details &nbsp;&nbsp;
                    <Link to='/employment'>
                        <button type='button' className='btn btn-sm btn-info'> *Edit</button>
                    </Link>
                </h3>
                <div>
                    Employee Name - <input value={props.employeeDetails.empName} disabled></input> 
                </div>
                <div>
                    Employee ID - <input value={props.employeeDetails.empId} disabled></input> 
                </div>
                <div>
                    Date Of Joining  - <input value={props.employeeDetails.dateOfJoining} disabled></input> 
                </div>
                <div>
                    Posted Unit - <input value={props.employeeDetails.postedUnit} disabled></input> 
                </div>
                
            </div>
            <br/>
            <button type='button' onClick={()=>{
                if(props.allFormStatus.personal.syncErrors){                    
                    alert("Fill up all the personal details to submit")
                }
                else if(props.allFormStatus.employment.syncErrors){
                    alert("Fill up all the employment details to submit")
                }
                else{
                    console.log("trying to submit")
                    console.log("Personal details ",props.personalDetails );
                    console.log("Employment details ",props.employeeDetails );
                }
            }}>
                Submit all forms
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    let empSelector = formValueSelector('employment')
    let personalSelector = formValueSelector('personal')
    let employeeDetails = empSelector(state, 'empName', 'empId', 'dateOfJoining','postedUnit')
    let personalDetails = personalSelector(state, 'firstName', 'lastName','dateOfBirth','gender')
    let allFormStatus=state.form
    return {
        employeeDetails,
        personalDetails,
        allFormStatus
    }
}

export default connect(mapStateToProps)(Review) 