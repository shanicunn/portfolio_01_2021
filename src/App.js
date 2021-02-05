import React from 'react';
import './components/Home';
import './App.css';
import Home from './components/Home';
import Skills_Projects from './components/Skills_Projects';
import Edu_Contact_Bio from './components/Edu_Contact_Bio';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Home/>
      <Skills_Projects />
      <Edu_Contact_Bio />
      <Footer />
    </div>
  );
}

export default App;
