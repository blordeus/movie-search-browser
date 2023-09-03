import Hero from "./Hero";

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRjMTJmYzJmY2U5MTU3M2YwZWRhZjhmZGJkMzA5NiIsInN1YiI6IjY0MzFmOTU2OWE2NDM1MDY2NmM3NDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RE5zhqjNVUt4QvLDBm4KXYSO4ZnZ3oyz7ypPWdOXXMs
//'https://api.themoviedb.org/3/search/movie?query=avengers&include_adult=false&language=en-US&page=1'

const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // Add the URL of the movie poster here

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <a href="#" className="btn btn-primary">Show details</a>
            </div>
        </div>
    );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const results = searchResults.map((obj, i) => {
    return <MovieCard key={i} movie={obj} />
  });
  return (
    <div>
      <Hero text={title} />
      {results &&
      }
    </div>
  );
};

export default Search;
