import React from 'react';
import InputTextForm from './InputTextForm';
import InputFileForm from './InputFileForm';
import InputDateForm from './InputDateForm';
import InputSelectOption from './InputSelectOption';
import InputRadioButton from './InputRadioButton';
import InputRange from './InputRange';

const FormComponent = () => {
    return <div>
        <InputTextForm /><br />
        <InputFileForm /><br />
        <InputDateForm /><br />
        <InputSelectOption /><br />
        <InputRadioButton /><br />
        <InputRange /><br />
    </div>;
}

export default FormComponent;