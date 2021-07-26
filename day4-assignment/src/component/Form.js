import React, { Component } from 'react';
import Select from 'react-select';
import moment from 'moment';

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

    submitHandler = (event) => {
        event.preventDefault()
        FormData = {
            Name: this.state.EnterName,
            Email: this.state.EnterEmail,
            Gender: this.state.EnterGender,
            DOB: this.state.EnterDOB,
            Education: this.state.EnterEdu,
            Password: this.state.EnterPassword,
            ConfirmPass: this.state.EnterConfirmPass,
            ProfilePic: this.state.EnterProfile,
        }

        console.log(FormData)

    };

    render() {



        return <div>
            <form onSubmit={this.submitHandler.bind(this)}>

                <div>
                    <label>{this.props.data.name.label}</label>
                    <input type="text" onChange={this.NameHandler} required /><br />
                </div><br />

                <div>
                    <label>{this.props.data.email.label}</label>
                    <input type="email" onChange={this.EmailHandler} required /><br />
                </div><br />

                <div>
                    <label>{this.props.data.date.label}</label>
                    <input type="date" onChange={this.DOBHandler} required max={moment().format("YYYY-MM-DD")} /><br />
                </div><br />

                <div>
                    <label>{this.props.data.gender.label}</label>
                    {
                        this.props.data.gender.options.map((item) => <div>
                            <input type="radio" onChange={this.GenderHandler} id={item.id} name="Radio" value={item.value} key={item.value} required />
                            <label >{item.label}</label><br /></div>)
                    }
                </div>

                <div className="mb-1">
                    Image <span className="font-css top">*</span>
                    <div className="">
                        <input type="file" id="file-input" name="ImageStyle" onChange={this.ProfileHandler} required />
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <label >{this.props.data.education.label}</label>
                    <Select
                        name={this.props.data.education.name}
                        onChange={this.EduHandler}
                        menuPlacement="auto"
                        menuPosition="fixed"
                        text-align="center"
                        options={this.props.data.education.options}

                    >

                    </Select>
                </div>


                <div>
                    <label>{this.props.data.password.label}</label>
                    <input type="password" onChange={this.PasswordHandler} required pattern=".{8,}" title="Eight or more characters" /><br />
                </div><br />

                <div>
                    <label>{this.props.data.confirmpassword.label}</label>
                    <input type="password" onChange={this.ConfirmPassHandler} required pattern=".{8,}" title="Eight or more characters" /><br />
                </div><br />
                <button type='submit' >Submit </button>

            </form>

        </div >
    }
}

export default Form;