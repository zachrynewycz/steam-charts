import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ userInput }) => {
    const [steamGameData, setSteamGameData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {        
        fetch("/getSteamGameList")
        .then(res => res.json())
        .then(data => setSteamGameData(data.applist.apps))
    }, [])
    
    return (  
    <ul>
        {(userInput && steamGameData) &&
            steamGameData
            .filter(game => game.name.toLowerCase() === userInput.toLowerCase())
            .slice(0,10)
            .map(game => <li onClick={(e) => {navigate(`/game/${e.target.value}`)}} className="cursor-pointer text-white" value={game.appid} key={game.appid}>{game.name}</li>)
        }
    </ul>
    );
}
 
export default SearchResults;