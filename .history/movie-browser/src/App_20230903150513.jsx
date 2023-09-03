import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
