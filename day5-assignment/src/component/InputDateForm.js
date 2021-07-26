import React from 'react';
import moment from 'moment';

const InputDateForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="date" required max={moment().format("YYYY-MM-DD")} onChange={props.DOBHandler} required /><br />
    </div>
}

export default InputDateForm;