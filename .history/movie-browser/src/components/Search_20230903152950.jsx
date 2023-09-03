import Hero from "./Hero";

const Search = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;
  return (
    <div>
      <Hero text={keyword}/>
    </div>
  )
}

export default Search;
