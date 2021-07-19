import React from 'react';

const InputRadioButton = (props) => {
    return <div>
        <p>Please select your age:</p>
        <input type="radio" id="age1" name="age" value="30" />
        <label >0 - 30</label><br />
        <input type="radio" id="age2" name="age" value="60" />
        <label >31 - 60</label><br />
        <input type="radio" id="age3" name="age" value="100" />
        <label >61 - 100</label><br />
    </div>;
}

export default InputRadioButton;