import React from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import Users from './components/Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Lo and Behold these nerds!</h1>
      <Users />
      <Form />
    </div>
  );
}

export default App;
