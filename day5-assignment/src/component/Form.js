import React, { Component } from 'react';
import { nanoid } from "nanoid";
import ListRecord from './ListRecord'
import "../App.css";
import InputDateForm from './InputDateForm';
import InputEmailForm from './InputEmailForm';
import InputNameForm from './InputNameForm';
import InputGenderForm from './InputGenderForm';
import InputImageForm from './InputImageForm';
import InputEducationForm from './InputEducationForm'
import InputPasswordForm from './InputPasswordForm'
import InputConfirmPasswordForm from './InputConfirmPasswordForm';

class Form extends Component {

    constructor() {

        super()

        this.state = {
            EnterName: "",
            EnterEmail: "",
            EnterGender: "",
            EnterDOB: "",
            EnterEdu: "",
            EnterPassword: "",
            EnterConfirmPass: "",
            EnterProfile: "",
            SubmittedForm: [],


        }
    }

    NameHandler = (event) => {
        this.setState({ EnterName: event.target.value })
    }
    EmailHandler = (event) => {
        this.setState({ EnterEmail: event.target.value })
    }
    GenderHandler = (event) => {
        this.setState({ EnterGender: event.target.value })
    }
    DOBHandler = (event) => {
        this.setState({ EnterDOB: event.target.value })
    }
    EduHandler = (event) => {
        this.setState({ EnterEdu: event.value })
    }
    PasswordHandler = (event) => {
        this.setState({ EnterPassword: event.target.value })
    }
    ConfirmPassHandler = (event) => {
        this.setState({ EnterConfirmPass: event.target.value })
    }
    ProfileHandler = (event) => {
        this.setState({ EnterProfile: event.target.value })
    }

    deleteRecordHandler = (newData) => {
        this.setState({ SubmittedForm: newData })
    }

    EditedDataHandle = (EditedData) => {

        const selectedRecord = this.state.SubmittedForm.filter((items) => items.id === EditedData.id)
        const UpdatedRow = [...this.state.SubmittedForm]
        UpdatedRow[UpdatedRow.findIndex(o => o.id === selectedRecord[0].id)] = EditedData
        this.setState({ SubmittedForm: UpdatedRow })

    }
    submitHandler = (event) => {
        event.preventDefault()
        FormData = {
            id: nanoid(),
            name: this.state.EnterName,
            email: this.state.EnterEmail,
            Gender: this.state.EnterGender,
            DOB: this.state.EnterDOB,
            Education: this.state.EnterEdu,
            Password: this.state.EnterPassword,
            ConfirmPassword: this.state.EnterConfirmPass,
            profilePic: this.state.EnterProfile,
        }
        this.setState({ SubmittedForm: [FormData, ...this.state.SubmittedForm] })
    };

    render() {


        return <div className="app-container">
            <div >
                <form onSubmit={this.submitHandler.bind(this)} >

                    <InputNameForm label={this.props.data.name.label} NameHandler={this.NameHandler} />
                    <InputEmailForm label={this.props.data.email.label} EmailHandler={this.EmailHandler} />
                    <InputDateForm label={this.props.data.date.label} DOBHandler={this.DOBHandler} />
                    <InputGenderForm label={this.props.data.gender.label} options={this.props.data.gender.options} GenderHandler={this.GenderHandler} />
                    <InputImageForm ProfileHandler={this.ProfileHandler} />
                    <InputEducationForm label={this.props.data.education.label} name={this.props.data.education.name} options={this.props.data.education.options} EduHandler={this.EduHandler} />
                    <InputPasswordForm label={this.props.data.password.label} PasswordHandler={this.PasswordHandler} />
                    <InputConfirmPasswordForm label={this.props.data.confirmpassword.label} ConfirmPassHandler={this.ConfirmPassHandler} />

                    <button type='submit' >Submit </button>

                </form>

            </div >
            <ListRecord record={this.state.SubmittedForm} data={this.props.data} deleteRecordHandler={this.deleteRecordHandler} EditedDataHandle={this.EditedDataHandle} />
        </div>
    }
}

export default Form;