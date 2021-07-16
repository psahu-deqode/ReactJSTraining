import React from 'react';

const InputSelectOption = (props) => {
    return <div>
        <p>Please select your options:</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label > I have a bike</label><br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label > I have a car</label><br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label > I have a boat</label><br></br>
    </div>;
}

export default InputSelectOption;