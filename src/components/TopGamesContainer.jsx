import { useEffect, useState } from "react";
import TopGame from "./TopGame";

const TopGamesContainer = () => {
    const [gameData, setGameData] = useState([])

    useEffect(() => {
        fetch("/getTopGames")
        .then(res => res.json())
        .then(data => setGameData(data))
    }, [])

    return (  
    <div>
        <div>
            <h1>Top Games &#128200;</h1>
            <h1>Playing Now &nbsp; Peak Today</h1>
        </div>
        {gameData && gameData.slice(0,12).map(game => <TopGame key={game.id} data={game}/>)}
    </div>
    );
}
 
export default TopGamesContainer;