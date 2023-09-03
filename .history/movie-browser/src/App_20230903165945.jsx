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

  useEffect(() => {
    console.log(searchText, "is the search text")
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => 
      {console.log(data)
      setSearchResults(data.results)
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
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
