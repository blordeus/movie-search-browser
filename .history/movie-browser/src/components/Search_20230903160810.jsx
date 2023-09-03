import Hero from "./Hero";

//e94c12fc2fce91573f0edaf8fdbd3096
//
const Search = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;
  return (
    <div>
      <Hero text={title}/>
    </div>
  )
}

export default Search;
