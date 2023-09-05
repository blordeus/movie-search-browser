import Hero from "./Hero";
import { Link } from "react-router-dom";

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRjMTJmYzJmY2U5MTU3M2YwZWRhZjhmZGJkMzA5NiIsInN1YiI6IjY0MzFmOTU2OWE2NDM1MDY2NmM3NDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RE5zhqjNVUt4QvLDBm4KXYSO4ZnZ3oyz7ypPWdOXXMs
//'https://api.themoviedb.org/3/search/movie?query=avengers&include_adult=false&language=en-US&page=1'

const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const detailUrl = `/movies/${movie.id}`;
    
    if (!movie.poster_path) {
        return null;
    }
    
    return (
        <div className="col-lg-3 col-md-6 col-12 my-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  //TOOO: add event handler 

  const results = searchResults.map((obj, i) => {
    return <MovieCard key={i} movie={obj} />
  });
  return (
    <div>
      <Hero text={title} />
      {results &&
        <div className="container">
          <div className="row">
            {results}
          </div>
        </div>
      }
    </div>
  );
};

export default Search;

