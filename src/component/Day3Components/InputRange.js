import React from 'react';

const InputRange = (props) => {
    return <div> <label >Points (between 0 and 100):</label>
        <input type="range" id="points" name="points" min="0" max="100" /><br /></div>;
}

export default InputRange;