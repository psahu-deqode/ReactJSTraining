import React from 'react';


const InputImageForm = (props) => {
    return <div className="mb-1">
        Image <span className="font-css top">*</span>
        <div className="">
            <input type="file" id="file-input" name="ImageStyle" onChange={props.ProfileHandler} required />
        </div>
    </div>
}
export default InputImageForm;