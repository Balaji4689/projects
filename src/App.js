import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
    <div className="App">
    <BrowserRouter>
     <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </BrowserRouter>
    </div>
    </div>
  )
}

export default App

