import React, { useState } from 'react';
import HelloWorld from './component/HelloWorldQ1';
import Text from './component/TextQ2';
import CustomButton from './component/CustomButtonQ3';
import InputText from './component/InputTextQ4';
import './App.css';


function App() {

  const [InputNew, setInputNew] = useState('');
  const [TextField, setTextField] = useState('Default Text');


  const ChangeHandler = (event) => {
    setInputNew(event.target.value)
  }

  const onClickCustom = (event) => {
    event.preventDefault()
    setTextField(InputNew)
  };

  return (
    <div className="App">
      <div> <HelloWorld /></div><br />
      <div> <Text message={TextField} /></div><br />
      <div> <InputText placeholder="Input Text" handleChange={ChangeHandler} /></div><br />
      <div><CustomButton label="Click me" function={onClickCustom} /></div><br /><br />
    </div>
  );
}

export default App;
