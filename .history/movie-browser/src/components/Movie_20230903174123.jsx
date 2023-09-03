import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Movie = () => {
    const id =  useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=4f3d5e0b8f5b0b1d4b1e9b0b1e9b1e9b1e9b0b1e9b1e9b1e9b0b1e9b1e9`)
        .then(response => response.json())
        .then(data =>
            setMovieDetails(data)
        )
    }, [])
    console.log(movieDetails)
    return (
        
    )
    })
  return (
    <div>
      <Hero text="Movie detail view"/>
    </div>
  )
}

export default Movie
