import React from 'react';


const InputGenderForm = (props) => {

    return <div>
        <label>{props.label}</label>
        {
            props.options.map((item) => <div>
                <input type="radio" onChange={props.GenderHandler} id={item.id} name="Radio" value={item.value} key={item.value} required />
                <label >{item.label}</label><br /></div>)
        }
    </div>
}
export default InputGenderForm;