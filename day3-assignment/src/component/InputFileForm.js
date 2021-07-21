import React from 'react';


const InputFileForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="file" id={props.id} name={props.name}></input>
    </div>
}

export default InputFileForm;