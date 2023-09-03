import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import { Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';

function App() {

  return (
    <>
    <
      <Routes>
        <Router>
          <Home/>
        </Router>
        <NavBar/>
        <Home/>
        <About/>
      </Routes>
    </>
  )
}

export default App
