import React from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import Users from './components/Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Users />
      <Form />
    </div>
  );
}

export default App;
