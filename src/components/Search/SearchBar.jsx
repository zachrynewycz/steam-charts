import { useState } from "react";
import SearchResults from "./SearchResults";

const SearchBar = () => {
    const [input, setInput] = useState("");

    return (  
        <div>
            <input 
                className="rounded-md py-1.5 px-3 w-72 bg-component-bg text-white outline-none" 
                type="text" 
                placeholder="Search games..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <SearchResults setInput={setInput} userInput={input}/>
        </div>
    );
}
 
export default SearchBar;