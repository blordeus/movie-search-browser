import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import { Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar/>
      <Routes
      <Home/>
      <About/>
    </>
  )
}

export default App
