import Hero from "./Hero";

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRjMTJmYzJmY2U5MTU3M2YwZWRhZjhmZGJkMzA5NiIsInN1YiI6IjY0MzFmOTU2OWE2NDM1MDY2NmM3NDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RE5zhqjNVUt4QvLDBm4KXYSO4ZnZ3oyz7ypPWdOXXMs
//'https://api.themoviedb.org/3/search/movie?query=avengers&include_adult=false&language=en-US&page=1'

const MovieCard = ({movie}) => {

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const results = searchResults.map((obj, i) => {
    return <div key={i}>{obj.original_title}</div>;
  });
  return (
    <div>
      <Hero text={title} />
      {results}
    </div>
  );
};

export default Search;
