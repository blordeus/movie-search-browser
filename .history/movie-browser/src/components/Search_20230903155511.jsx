import Hero from "./Hero";

//7037c660d6eb38f86342febbf10d0997
const Search = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;
  return (
    <div>
      <Hero text={title}/>
    </div>
  )
}

export default Search;
