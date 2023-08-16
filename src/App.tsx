import React from 'react';
import './App.css';
import Header from './components/Header';
import SocialNav from './components/SocialNav';
import ToTopButton from './components/ToTopButton';
import Education from './views/Education';
import Experience from './views/Experience';
import Intro from './views/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Experience />
      <Education />
      <ToTopButton />
      <SocialNav />
    </div>
  );
}

export default App;
