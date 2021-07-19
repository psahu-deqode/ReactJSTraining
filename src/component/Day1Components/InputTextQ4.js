import React from 'react';

const InputText = (props) => {
    return <div>
        <input type="text" placeholder={props.placeholder} onChange={props.handleChange} />
    </div>;
}

export default InputText;