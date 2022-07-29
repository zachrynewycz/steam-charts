import { useEffect, useState } from "react";

const TopGames = () => {
    const [gameData, setGameData] = useState([])

    useEffect(() => {
        fetch("/getTopGames")
        .then(res => res.json())
        .then(data => setGameData(data))
    }, [])

    return (  
    <div>
        <>
            <h1>Top Games &#128200;</h1>
            <div>
                <h1>Playing Now</h1>
                <h1>Peak Today</h1>
            </div>
        </>
        
        {gameData.slice(0,10).map(game => 
            <div key={game.id}>
                <div>
                    <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.id}/header.jpg`}/>
                    <p>{game.name}</p>
                </div>
                <div>
                    <p>{game.current}</p>
                    <p>{game.peak}</p>
                </div>
                <hr/>
            </div>
        )}
    </div>
    );
}
 
export default TopGames;