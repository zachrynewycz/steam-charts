import { useEffect, useState } from "react";
import TopGameRow from "./TopGameRow";

const TopGames = () => {
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
        {gameData.slice(0,12).map(game => <TopGameRow game={game}/>)}
    </div>
    );
}
 
export default TopGames;