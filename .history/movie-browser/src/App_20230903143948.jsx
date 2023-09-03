import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
