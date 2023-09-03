import Hero from "./Hero";

const Search = ({keyword, searchResults}) => {
  return (
    <div>
      <Hero text={keyword}/>
    </div>
  )
}

export default Search;
