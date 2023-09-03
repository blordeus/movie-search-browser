import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Movie = () => {
  const { id } = useParams();
  console.log(id);

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4f3d5e0b8f5b0b1d4b1e9b0b1e9b1e9b1e9b0b1e9b1e9b1e9b0b1e9b1e9`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRjMTJmYzJmY2U5MTU3M2YwZWRhZjhmZGJkMzA5NiIsInN1YiI6IjY0MzFmOTU2OWE2NDM1MDY2NmM3NDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RE5zhqjNVUt4QvLDBm4KXYSO4ZnZ3oyz7ypPWdOXXMs",
          },
        }
      );
      const data = await response.json();
      setTimeout(() => {
        setMovieDetails(data);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  console.log(movieDetails);

  const renderMovieDetails = () => {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      //ToDO: Deal with a possible missing image
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      return( 
        <div>
            <Hero text={movieDetails.original_title} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterPath} alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
                    </div>
                    <div className="col-md-9">
                        <h2></h2>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  };

  return renderMovieDetails();
};

export default Movie;
