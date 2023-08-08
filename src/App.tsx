import React from 'react';
import './App.css';
import Education from './views/Education';
import Experience from './views/Experience';
import Intro from './views/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
