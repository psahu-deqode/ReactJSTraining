import React from 'react';

const EditableNameForm = (props) => {

    return <div>
        <label>{props.label}</label>
        <input type="text" onChange={props.NameHandler} value={props.value} required /><br />
    </div>
}

export default EditableNameForm;