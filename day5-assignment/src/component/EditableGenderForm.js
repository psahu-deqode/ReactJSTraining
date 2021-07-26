import React from 'react';


const EditableGenderForm = (props) => {

    return <div>
        <label>{props.label}</label>
        {
            props.options.map((item) => <div>
                <input type="radio" onChange={props.GenderHandler} id={item.id} name="Radio" value={item.value} key={item.value} checked={item.value === props.CheckCondition} required />
                <label >{item.label}</label><br /></div>)
        }
    </div>
}
export default EditableGenderForm;