import React from 'react';
import Select from 'react-select';


const EditableEducationForm = (props) => {

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
            options={props.options}
            value={props.value}
            defaultValue={props.defaultValue}>

        </Select>
    </div>
}


export default EditableEducationForm;