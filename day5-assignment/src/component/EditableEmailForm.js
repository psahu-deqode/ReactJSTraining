import React from 'react';


const EditableEmailForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="email" onChange={props.EmailHandler} value={props.value} required /><br />
    </div>
}

export default EditableEmailForm;