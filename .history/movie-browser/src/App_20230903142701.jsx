import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import { Route } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
    </>
  )
}

export default App
