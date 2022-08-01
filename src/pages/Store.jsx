import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import StoreBody from "../components/StoreBody";
import StoreHeader from "../components/StoreHeader";

const Store = () => {
    const [steamGameData, setSteamGameData] = useState();
    const [gamePlayerData, setGamePlayerData] = useState();
    const {appid} = useParams();

    useEffect(() => {
        getSteamGameData()
        getGamePlayerCount()
    }, [])

    useEffect(() => {console.log(steamGameData)}, [steamGameData])

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
    }

    return (  
        <div>
            {steamGameData && gamePlayerData && 
                <>
                    <NavBar/>
                    <StoreHeader data={steamGameData}/>
                    <StoreBody data={steamGameData} players={gamePlayerData}/> 
                </>
            }
        </div>
    );
}
 
export default Store;