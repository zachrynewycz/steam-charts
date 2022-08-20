import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ userInput, setInput }) => {
    const [steamGameData, setSteamGameData] = useState();
    const navigate = useNavigate();

    useEffect(() => {        
        fetch("https://steamcharts.herokuapp.com/getSteamGameList")
        .then(res => res.json())
        .then(data => setSteamGameData(data.applist.apps))
    }, [])
    
    return (  
        <>
            {(userInput && steamGameData) && 
                <ul className="bg-category-bg text-lg py-2 px-3 absolute w-72">
                    {steamGameData
                        .filter(game => game.name.toLowerCase() === userInput.toLowerCase())
                        .slice(0,10)
                        .map(game => <li onClick={(e) => {
                            navigate(`/game/${e.target.value}`)
                            setInput("")
                        }} className="cursor-pointer text-white hover:text-xl mb-2 last:mb-0 font-pop_med" value={game.appid} key={game.appid}>{game.name}</li>)
                    }
                </ul>
            }
        </>
    );
}
 
export default SearchResults;