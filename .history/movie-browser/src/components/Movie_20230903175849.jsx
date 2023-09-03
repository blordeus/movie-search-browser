import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Movie = () => {
    const {id} =  useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = uIeState(true)

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRjMTJmYzJmY2U5MTU3M2YwZWRhZjhmZGJkMzA5NiIsInN1YiI6IjY0MzFmOTU2OWE2NDM1MDY2NmM3NDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RE5zhqjNVUt4QvLDBm4KXYSO4ZnZ3oyz7ypPWdOXXMs'
        }
      };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f3d5e0b8f5b0b1d4b1e9b0b1e9b1e9b1e9b0b1e9b1e9b1e9b0b1e9b1e9`, options)
        .then(response => response.json())
        .then(data =>
            setMovieDetails(data)
            setIsLoading(false)
        )
    }, [id])
    console.log(movieDetails)
  
    function renderMovieDetails(){
        if(isLoading) {
            return <Hero text="Loading..."/> 
        }
        if(MovieDetails) {
            return <Hero text={movieDetails.original_title}/>
        }
    }

  return (
    <div>
      <Hero text={movieDetails.original_title}/>
    </div>
  )
}

export default Movie
