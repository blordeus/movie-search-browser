import Hero from "./Hero";
import { useParams } from "react-router-dom";

const Movie = () => {
    const id =  useParams()
    console.log(id)

    useSt
  return (
    <div>
      <Hero text="Movie detail view"/>
    </div>
  )
}

export default Movie