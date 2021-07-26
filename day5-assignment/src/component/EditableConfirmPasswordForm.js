import React from 'react';

const EditableConfirmPasswordForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="password" onChange={props.ConfirmPassHandler} value={props.value} required pattern=".{8,}" title="Eight or more characters" /><br />
    </div>
}

export default EditableConfirmPasswordForm;