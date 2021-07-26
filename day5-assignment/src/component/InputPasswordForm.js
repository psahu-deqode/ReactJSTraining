import React from 'react';

const InputPasswordForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="password" onChange={props.PasswordHandler} required pattern=".{8,}" title="Eight or more characters" /><br />
    </div>
}

export default InputPasswordForm;