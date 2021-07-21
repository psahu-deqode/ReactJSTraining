import React from 'react';

const InputRange = (props) => {
    return <div> <label >{props.label}</label>
        <input type="range" id={props.id} name={props.name} min={props.min} max={props.max} /><br /></div>;
}

export default InputRange;