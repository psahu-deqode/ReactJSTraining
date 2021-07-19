import React from 'react';

const CustomButton = (props) => {

    return (
        <button type='submit' onClick={props.function}>{props.label} </button>
    );
};

export default CustomButton;