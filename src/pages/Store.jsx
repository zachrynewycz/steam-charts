import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import GameInfo from "../components/Store/GameInfo";
import Carousel from "../components/Store/Carousel";
import Footer from "../components/Footer";
import GameBanner from "../components/Store/GameBanner";

const Store = () => {
    const [steamGameData, setSteamGameData] = useState();
    const [playerCounts, setPlayerCounts] = useState();
    const { appid } = useParams();

    useEffect(() => {
        getSteamGameData()
        getGamePlayerCount()
    }, [appid])

    const getSteamGameData = () => {
        fetch(`http://localhost:5000/getSteamGameData/${appid}`)
        .then(res => res.json())
        .then(data => setSteamGameData(data[appid].data))
    }

    const getGamePlayerCount = () => {
        fetch(`http://localhost:5000/getGamePlayerCount/${appid}`)
        .then(res => res.json())
        .then(data => setPlayerCounts(data))
    }

    return (  
    <>
        {(steamGameData && playerCounts) && 
            <div className="max-w-[850px] min-w-[400px] mx-auto p-5 md:p-none">
                <NavBar/>
                <GameBanner game={steamGameData}/>
                <GameInfo game={steamGameData} playerCount={playerCounts}/> 
                <Carousel images={steamGameData.screenshots}/>
                <Footer/>
            </div>
        }
    </>
    );
}
 
export default Store;