import React from 'react';


const InputRadioButton = (props) => {

    return <div>
        {
            props.options.map((item) => <div>
                <input type="radio" id={item.id} name="Radio" value={item.value} />
                <label >{item.label}</label><br /></div>)
        }
    </div>
}
export default InputRadioButton;