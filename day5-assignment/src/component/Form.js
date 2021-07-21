
import React, { useState } from 'react';
import Select from 'react-select';

const Form = (props) => {
    const [EnterName, setEnterName] = useState('');
    const [EnterEmail, setEnterEmail] = useState('');
    const [EnterGender, setEnterGender] = useState('');
    const [EnterDOB, setEnterDOB] = useState('');
    const [EnterEdu, setEnterEdu] = useState(props.data.education.options[0].value);
    const [EnterPassword, setEnterPassword] = useState('');
    const [EnterConfirmPass, setEnterConfirmPass] = useState('');
    const [EnterProfile, setEnterProfile] = useState('');
    const [SubmittedForm, setSubmittedForm] = useState([])

    const NameHandler = (event) => {
        setEnterName(event.target.value)
    }
    const EmailHandler = (event) => {
        setEnterEmail(event.target.value)
    }
    const GenderHandler = (event) => {
        setEnterGender(event.target.value)
    }
    const DOBHandler = (event) => {
        setEnterDOB(event.target.value)
    }
    const EduHandler = (event) => {
        setEnterEdu(event.value)
    }
    const PasswordHandler = (event) => {
        setEnterPassword(event.target.value)
    }
    const ConfirmPassHandler = (event) => {
        setEnterConfirmPass(event.target.value)
    }
    const ProfileHandler = (event) => {
        setEnterProfile(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()
        FormData = {
            name: EnterName,
            email: EnterEmail,
            Gender: EnterGender,
            DOB: EnterDOB,
            Education: EnterEdu,
            Password: EnterPassword,
            ConfirmPassword: EnterConfirmPass,
            profilePic: EnterProfile,
        }
        setSubmittedForm(([FormData, ...SubmittedForm]), props.parentCallback(SubmittedForm));



    };

    return <div>
        <form onSubmit={submitHandler}>

            <div>
                <label>{props.data.name.label}</label>
                <input type="text" onChange={NameHandler} /><br />
            </div><br />

            <div>
                <label>{props.data.email.label}</label>
                <input type="email" onChange={EmailHandler} /><br />
            </div><br />

            <div>
                <label>{props.data.date.label}</label>
                <input type="date" onChange={DOBHandler} /><br />
            </div><br />

            <div>
                <label>{props.data.gender.label}</label>
                {
                    props.data.gender.options.map((item) => <div>
                        <input type="radio" onChange={GenderHandler} id={item.id} name="Radio" value={item.value} key={item.value} />
                        <label >{item.label}</label><br /></div>)
                }
            </div>

            <div className="mb-1">
                Image <span className="font-css top">*</span>
                <div className="">
                    <input type="file" id="file-input" name="ImageStyle" onChange={ProfileHandler} />
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <label >{props.data.education.label}</label>
                <Select
                    name={props.data.education.name}
                    onChange={EduHandler}
                    menuPlacement="auto"
                    menuPosition="fixed"
                    text-align="center"
                    options={props.data.education.options}>

                </Select>
            </div>


            <div>
                <label>{props.data.password.label}</label>
                <input type="password" onChange={PasswordHandler} /><br />
            </div><br />

            <div>
                <label>{props.data.confirmpassword.label}</label>
                <input type="password" onChange={ConfirmPassHandler} /><br />
            </div><br />
            <button type='submit'>Submit </button>

        </form>

    </div >
}

export default Form;
