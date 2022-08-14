import { useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
    const [input, setInput] = useState("");

    return (  
        <div>
            <input className="rounded-md py-1 px-3 w-72 bg-component-bg text-white outline-none" type="text" placeholder="Search games..." onChange={(e) => setInput(e.target.value)}/>
            <SearchResults userInput={input}/>
        </div>
    );
}
 
export default SearchBar;