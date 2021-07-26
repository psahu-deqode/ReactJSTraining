import React from 'react';

const InputNameForm = (props) => {
    console.log(props.EditMode)
    return <div>
        <label>{props.label}</label>
        <input type="text" onChange={props.NameHandler} required /><br />
    </div>
}

export default InputNameForm;