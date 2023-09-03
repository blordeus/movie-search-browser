import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactDOM } from 'react';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Home/>
        <About/>
      </Routes>
      <Home/>
      <About/>
    </>
  )
}

export default App
