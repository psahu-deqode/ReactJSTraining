import React from 'react';
import Form from './component/Form';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

function App() {

  return (
    <ErrorBoundary>
      <div className="App">
        <div><Form /></div><br />
      </div>
    </ErrorBoundary>
  );
}

export default App;
