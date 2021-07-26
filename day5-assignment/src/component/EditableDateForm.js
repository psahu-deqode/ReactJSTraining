import React from 'react';
import moment from 'moment';

const EditableDateForm = (props) => {
    return <div>
        <label>{props.label}</label>
        <input type="date" required max={moment().format("YYYY-MM-DD")} value={props.value} onChange={props.DOBHandler} /><br />
    </div>
}

export default EditableDateForm;