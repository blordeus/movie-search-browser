import './App.css'
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import Movie from './components/Movie';
import 404Page
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
    if(searchText){
       fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(data => 
      {console.log(data)
      setSearchResults(data.results)
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
    }
  }, [searchText])

  return (
    <>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search  keyword={searchText} searchResults={searchResults}/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
      </Routes>
    </>
  )
}

export default App
