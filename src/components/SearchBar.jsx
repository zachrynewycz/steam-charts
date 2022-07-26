import { useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
    const [input, setInput] = useState("");

    return (  
        <div>
            <input type="text" placeholder="Search games..." onChange={(e) => setInput(e.target.value)}/>
            <button/>
            <SearchResults userInput={input}/>
        </div>
    );
}
 
export default SearchBar;