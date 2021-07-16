import React, { useState } from 'react';

const Form = (props) => {
    const [EnterName, setEnterName] = useState('');
    const [EnterEmail, setEnterEmail] = useState('');
    const [EnterGender, setEnterGender] = useState('');
    const [EnterDOB, setEnterDOB] = useState('');
    const [EnterEdu, setEnterEdu] = useState('');
    const [EnterPassword, setEnterPassword] = useState('');
    const [EnterConfirmPass, setEnterConfirmPass] = useState('');
    const [EnterProfile, setEnterProfile] = useState('');

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
        setEnterEdu(event.target.value)
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
        const FormData = {
            name: EnterName,
            email: EnterEmail,
            Gender: EnterGender,
            DOB: EnterDOB,
            Education: EnterEdu,
            Password: EnterPassword,
            ConfirmPassword: EnterConfirmPass,
            profilePic: EnterProfile,
        }
        console.log(FormData)
    };

    return <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>Name</label>
                <input type="text" onChange={NameHandler} /><br />
            </div><br />
            <div>
                <label>Email</label>
                <input type="email" onChange={EmailHandler} /><br />
            </div><br />
            <div>
                <label>Date of birth</label>
                <input type="date" onChange={DOBHandler} /><br />
            </div><br />
            <div>
                <label for="gender">Gender:</label><br />
                <input type="radio" id="Male" name="Male" value="Male" onChange={GenderHandler} />
                <label for="Male">Male</label><br></br>
                <input type="radio" id="Female" name="Female" value="Female" onChange={GenderHandler} />
                <label for="Female">Female</label><br></br>
                <input type="radio" id="Non binary" name="Non binary" value="Non binary" onChange={GenderHandler} />
                <label for="Non binary">Non binary</label><br></br>
            </div><br />
            <div className="mb-1">
                Image <span className="font-css top">*</span>
                <div className="">
                    <input type="file" id="file-input" name="ImageStyle" onChange={ProfileHandler} />
                </div>
            </div>
            <div>
                <label for="education">Highest Qualification:</label>
                <select id="education" name="education" onChange={EduHandler}>
                    <option value="Graduate">Graduate</option>
                    <option value="Post graduate">Post graduate</option>
                    <option value="Phd">Phd</option>
                    <option value="Post doctorate">Post doctorate</option>
                </select>
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={PasswordHandler} /><br />
            </div><br />
            <div>
                <label>Confirm Password</label>
                <input type="password" onChange={ConfirmPassHandler} /><br />
            </div><br />
            <button type='submit'>Submit </button>
        </div>
    </form>;
}

export default Form;