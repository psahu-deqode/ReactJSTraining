import React from 'react';
import Select from 'react-select';



const InputSelectOption = (props) => {

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
    }}>
        <Select
            options={props.options}
            menuPlacement="auto"
            menuPosition="fixed"
            text-align="center"

        />
    </div>
}

export default InputSelectOption;