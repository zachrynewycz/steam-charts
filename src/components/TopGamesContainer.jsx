import { useEffect, useState } from "react";
import TopGame from "./TopGame";

const TopGamesContainer = () => {
    const [gameData, setGameData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/getTopGames")
        .then(res => res.json())
        .then(data => setGameData(data))
    }, [])

    return (  
    <div className="bg-component-bg rounded-xl px-6 py-5 overflow-y-scroll h-[780px] mb-14 scrollbar">
        
        <div className="flex justify-between font-pop_semi text-white mb-7">
            <div className="text-xl md:text-3xl md:w-3/4">Top Games &#128200;</div>
        
            <div className="text-md md:text-xl w-1/2 flex justify-around text-center">
                <span className="text-green-txt">Playing Now</span>
                <span>Todays Peak</span>
            </div>
        </div>
        
        {gameData.slice(0,12).map(game => <TopGame key={game.id} data={game}/>)}
    </div>
    );
}
 
export default TopGamesContainer;