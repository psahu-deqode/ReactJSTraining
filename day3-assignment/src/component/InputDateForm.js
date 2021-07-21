import React from 'react';

const InputDateForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="date" />
    </div>;
}

export default InputDateForm;