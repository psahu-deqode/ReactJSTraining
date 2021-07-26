import React from 'react';
import Select from 'react-select';


const InputEducationForm = (props) => {

    return <div style={{
        display: 'flex',

    }}>
        <label >{props.label}</label>
        <Select
            name={props.name}
            onChange={props.EduHandler}
            menuPlacement="auto"
            menuPosition="fixed"
            text-align="center"
            options={props.options}>

        </Select>
    </div>
}

export default InputEducationForm;