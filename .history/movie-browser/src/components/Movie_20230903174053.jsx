import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Movie = () => {
    const id =  useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        
    })
  return (
    <div>
      <Hero text="Movie detail view"/>
    </div>
  )
}

export default Movie
