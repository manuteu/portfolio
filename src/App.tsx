import React from 'react';
import './App.css';
import Experience from './views/Experience';
import Intro from './views/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <div className='my-40' />
      <Experience />
    </div>
  );
}

export default App;
