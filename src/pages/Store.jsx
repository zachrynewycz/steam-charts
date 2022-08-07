import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import GameInfo from "../components/GameInfo";
import GameBanner from "../components/GameBanner";

const Store = () => {
    const [steamGameData, setSteamGameData] = useState();
    const [gamePlayerData, setGamePlayerData] = useState();
    const { appid } = useParams();

    useEffect(() => {
        getSteamGameData()
        getGamePlayerCount()
    }, [])

    useEffect(() => {}, [steamGameData])

    const getSteamGameData = () => {
        fetch(`/getSteamGameData/${appid}`)
        .then(res => res.json())
        .then(data => setSteamGameData(data[appid].data))
        .catch(e => console.log(e))
    }

    const getGamePlayerCount = () => {
        fetch(`/getGamePlayerCount/${appid}`)
        .then(res => res.json())
        .then(data => setGamePlayerData(data))
        .catch(e => console.log(e))
    }

    return (  
    <>
        { steamGameData && gamePlayerData && 
            <div>
                <NavBar/>
                <GameBanner data={steamGameData}/>
                <GameInfo data={steamGameData} players={gamePlayerData}/> 
            </div>
        }
    </>
    );
}
 
export default Store;