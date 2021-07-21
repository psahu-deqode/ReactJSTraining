import React from 'react';
import InputTextForm from './InputTextForm';
import InputFileForm from './InputFileForm';
import InputDateForm from './InputDateForm';
import InputSelectOption from './InputSelectOption';
import InputRadioButton from './InputRadioButton';
import InputRange from './InputRange';

const FormComponent = () => {

    const RangeProp = { id: "Range", name: "Range", min: 0, max: 100, label: "Range label" }
    const TextInput = { label: "Text Input: " }
    const FileInput = { id: "NewFile", name: "NewFile", label: "Please select a file" }

    const RadioButton = [
        { id: "opt1", label: "Male", value: "Male" },
        { id: "opt2", label: "Female", value: "Female" },
        { id: "opt3", label: "Non-Binary", value: "Non-Binary" }]

    const DateInput = { label: "Input Date" }

    const SelectOptions = [
        { value: 'opt1', label: 'opt1' },
        { value: 'opt2', label: 'opt2' },
        { value: 'opt3', label: 'opt3' }
    ]
    return <div>
        <InputTextForm label={TextInput.label} /><br />
        <InputFileForm id={FileInput.id} name={FileInput.name} label={FileInput.label} /><br />
        <InputDateForm label={DateInput.label} /><br />
        <InputRadioButton options={RadioButton} /><br />
        <InputRange id={RangeProp.id} name={RangeProp.name} min={RangeProp.min} max={RangeProp.max} label={RangeProp.label} /><br />
        <InputSelectOption options={SelectOptions} /><br />
    </div>;
}

export default FormComponent;