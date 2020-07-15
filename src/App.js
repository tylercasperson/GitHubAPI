import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItems from './components/users/UserItems'

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserItems />
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
