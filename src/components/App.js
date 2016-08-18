import React from 'react';
import AppBar from './AppBar.js';
import Notes from './Notes.js';
import './App.css';

const App = ({showRead, toggleFilter}) => {
  return (
    <div className="App">
      <AppBar />
      <Notes />
    </div>
  );
};

export default App;
