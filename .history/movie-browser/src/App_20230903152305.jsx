import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect}

function App() {

  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </>
  )
}

export default App
