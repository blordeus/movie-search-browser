import Hero from "./Hero";
import { useParams } from "react-router-dom";

const Movie = () => {
    const id =  useParams()
    console.log(id)

    const [first, setfirst] = useState(second)
  return (
    <div>
      <Hero text="Movie detail view"/>
    </div>
  )
}

export default Movie
