import React from 'react';


const EditableImageForm = (props) => {
    return <div className="mb-1">
        Image <span className="font-css top">*</span>
        <div className="">
            <input type="file" id="file-input" name="ImageStyle" onChange={props.ProfileHandler} />
        </div>
    </div>
}
export default EditableImageForm;