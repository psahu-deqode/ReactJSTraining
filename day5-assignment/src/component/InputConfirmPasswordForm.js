import React from 'react';

const InputConfirmPasswordForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="password" onChange={props.ConfirmPassHandler} required pattern=".{8,}" title="Eight or more characters" /><br />
    </div>
}

export default InputConfirmPasswordForm;