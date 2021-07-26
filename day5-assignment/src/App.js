import React from 'react';
import Form from './component/Form';
import './App.css';


function App() {

  const Data = {
    name: { label: "Name" },
    email: { label: "Email" },
    date: { label: "Date of birth" },
    gender: {
      label: "Gender", options: [
        { id: "opt1", label: "Male", value: "Male" },
        { id: "opt2", label: "Female", value: "Female" },
        { id: "opt3", label: "Non-Binary", value: "Non-Binary" }]
    },
    education: {
      label: "Highest Education",
      id: "Education",
      name: "Education",
      options: [
        { value: 'Graduation', label: 'Graduation' },
        { value: 'Post Graduation', label: 'Post Graduation' },
        { value: 'Doctorate', label: 'Doctorate' }
      ]

    },
    password: { label: "Password" },
    confirmpassword: { label: "Confirm password" }

  }

  return (
    <div className="app-container">
      <div><Form data={Data} /></div><br />
    </div>
  );
}

export default App;
