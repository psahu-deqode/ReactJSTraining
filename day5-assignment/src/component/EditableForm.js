import React, { Component } from 'react';
import "../App.css";

import EditableDateForm from './EditableDateForm';
import EditableEmailForm from './EditableEmailForm';
import EditableNameForm from './EditableNameForm';
import EditableGenderForm from './EditableGenderForm';
import EditableImageForm from './EditableImageForm';
import EditableEducationForm from './EditableEducationForm'
import EditablePasswordForm from './EditablePasswordForm'
import EditableConfirmPasswordForm from './EditableConfirmPasswordForm';

class EditableForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...props.EditFormData[0]
        }

    }

    NameHandler = (event) => {
        this.setState({ name: event.target.value })
    }
    EmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    GenderHandler = (event) => {
        this.setState({ Gender: event.target.value })
    }
    DOBHandler = (event) => {
        this.setState({ DOB: event.target.value })
    }
    EduHandler = (event) => {
        this.setState({ Education: event.value })
    }
    PasswordHandler = (event) => {
        this.setState({ Password: event.target.value })
    }
    ConfirmPassHandler = (event) => {
        this.setState({ ConfirmPassword: event.target.value })
    }
    ProfileHandler = (event) => {
        this.setState({ profilePic: event.target.value })
    }
    EditHandler = (event) => {
        event.preventDefault()
        FormData = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            Gender: this.state.Gender,
            DOB: this.state.DOB,
            Education: this.state.Education,
            Password: this.state.Password,
            ConfirmPassword: this.state.ConfirmPassword,
            profilePic: this.state.profilePic,
        }
        this.props.EditedRecord(FormData)
    }
    render() {

        return <div className="app-container">
            <div >
                <form onSubmit={this.EditHandler.bind(this)}>

                    <EditableNameForm label={this.props.data.name.label} NameHandler={this.NameHandler} value={this.state.name} />
                    <EditableEmailForm label={this.props.data.email.label} EmailHandler={this.EmailHandler} value={this.state.email} />
                    <EditableDateForm label={this.props.data.date.label} DOBHandler={this.DOBHandler} value={this.state.DOB} />
                    <EditableGenderForm label={this.props.data.gender.label} options={this.props.data.gender.options} GenderHandler={this.GenderHandler} CheckCondition={this.state.Gender} />
                    <EditableImageForm ProfileHandler={this.ProfileHandler} />
                    <EditableEducationForm label={this.props.data.education.label} name={this.props.data.education.name} options={this.props.data.education.options} EduHandler={this.EduHandler} value={this.props.data.education.options.filter((data) => data.value === this.state.Education)}
                        defaultValue={this.state.Education} />
                    <EditablePasswordForm label={this.props.data.password.label} PasswordHandler={this.PasswordHandler} value={this.state.Password} />
                    <EditableConfirmPasswordForm label={this.props.data.confirmpassword.label} ConfirmPassHandler={this.ConfirmPassHandler} value={this.state.ConfirmPassword} />

                    <button type='submit' >Submit </button>

                </form>

            </div >
        </div >
    }
}

export default EditableForm;