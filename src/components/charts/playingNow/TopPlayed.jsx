import { useEffect, useState } from "react";
import TopPlayedList from "./TopPlayedList";

const TopPlayed = () => {
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/getTopGames")
            .then((res) => res.json())
            .then((data) => setGameData(data));
    }, []);

    return (
        <>
            <h1 className="text-xl md:text-5xl font-pop_semi text-white">MOST PLAYED &#128200;</h1>
            <p className="font-pop_reg text-white mt-2">Top played games by player count</p>

            <div className="mt-9">
                <div className="text-white text-sm flex justify-between">
                    <p className="w-1/2">RANK</p>

                    <div className="w-1/2 flex justify-end mr-5 text-right">
                        <p className="mr-5">PLAYING NOW</p>
                        <p className="w-1/3">PEAK TODAY</p>
                    </div>
                </div>

                {gameData.map((game, i) => (
                    <TopPlayedList key={game.id} data={game} rank={++i} />
                ))}
            </div>
        </>
    );
};

export default TopPlayed;
