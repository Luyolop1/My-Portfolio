import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './assets/pages/Home/index';
import Header from "./assets/components/Header/index";
import About from "./assets/pages/About/index";
import Projects from "./assets/pages/Projects";
import Contact from "./assets/pages/contact/index";

function App() {
  

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
