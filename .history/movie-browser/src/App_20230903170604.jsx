import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRjMTJmYzJmY2U5MTU3M2YwZWRhZjhmZGJkMzA5NiIsInN1YiI6IjY0MzFmOTU2OWE2NDM1MDY2NmM3NDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RE5zhqjNVUt4QvLDBm4KXYSO4ZnZ3oyz7ypPWdOXXMs'
    }
  };

  useEffect(() => {
    console.log(searchText, "is the search text")
    is(searchText){

    }
   
  }, [searchText])

  return (
    <>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search  keyword={searchText} searchResults={searchResults}/>}/>
      </Routes>
    </>
  )
}

export default App
