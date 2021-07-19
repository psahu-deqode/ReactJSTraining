import React from 'react';
import HelloWorld from './component/Day1Components/HelloWorldQ1';
import Text from './component/Day1Components/TextQ2';
import CustomButton from './component/Day1Components/CustomButtonQ3';
import InputText from './component/Day1Components/InputTextQ4';
import Input from './component/Day1Components/InputQ5';
import FormComponent from './component/Day3Components/FormComponant';
import Form from './component/Day4Components/Form';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

function App() {

  const onClickCustom = () => {
    console.log("Button clicked!")
  }

  const ChangeHandler = () => {
    console.log("the value of the input field is changed")
  }
  return (
    <ErrorBoundary>
      <div className="App">
        <div> <HelloWorld /></div><br />
        <div> <Text message="Testing prop message" /></div><br />
        <div> <InputText placeholder="Input Text" handleChange={ChangeHandler} /></div><br />
        <div><CustomButton label="Click me" function={onClickCustom} /></div><br /><br />
        <div><Input /></div><br />
        <div><FormComponent /></div><br /><br />

        <div><Form /></div><br />

      </div>
    </ErrorBoundary>
  );
}

export default App;
