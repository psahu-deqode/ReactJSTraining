import React, { useState } from 'react';

const Input = (props) => {

    const [InputNew, setInputNew] = useState('');
    const [TextField, setTextField] = useState('Default Text');

    const inputChangeHandler = (event) => {
        setInputNew(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()

        setTextField(InputNew)
    };

    return <form onSubmit={submitHandler}>
        <div>
            <h1>{TextField}</h1>
            <input type="text" placeholder={props.placeholder} onChange={inputChangeHandler} ></input>
            <button type='submit'>Click me to change the text </button>
        </div></form>;
}

export default Input;