import React from 'react';

const EditablePasswordForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="password" onChange={props.PasswordHandler} value={props.value} required pattern=".{8,}" title="Eight or more characters" /><br />
    </div>
}

export default EditablePasswordForm;