import React from 'react';


const InputEmailForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="email" onChange={props.EmailHandler} required /><br />
    </div>
}

export default InputEmailForm;