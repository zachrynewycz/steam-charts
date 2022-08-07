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
            <div>
                <h1>Playing Now</h1>
                <h1>Peak Today</h1>
            </div>
        </div>
        {gameData.slice(0,10).map(game => <TopGameRow game={game}/>)}
    </div>
    );
}
 
export default TopGames;