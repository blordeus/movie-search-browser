import Hero from "./Hero";

//e94c12fc2fce91573f0edaf8fdbd3096
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRjMTJmYzJmY2U5MTU3M2YwZWRhZjhmZGJkMzA5NiIsInN1YiI6IjY0MzFmOTU2OWE2NDM1MDY2NmM3NDZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RE5zhqjNVUt4QvLDBm4KXYSO4ZnZ3oyz7ypPWdOXXMs

const Search = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;
  return (
    <div>
      <Hero text={title}/>
    </div>
  )
}

export default Search;
