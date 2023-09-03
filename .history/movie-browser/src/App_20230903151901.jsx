import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search'/>
      </Routes>
    </>
  )
}

export default App
