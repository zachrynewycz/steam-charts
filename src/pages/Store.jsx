import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StoreHeader from "../components/StoreHeader";

const Store = () => {
    const [steamGameData, setSteamGameData] = useState();
    const [gamePlayerData, setGamePlayerData] = useState();
    const {appid} = useParams();

    useEffect(() => {
        getSteamGameData()
        getGamePlayerCount()
    }, [])

    const getSteamGameData = () => {
        fetch(`/getSteamGameData/${appid}`)
        .then(res => res.json())
        .then(data => setSteamGameData(data))
    }

    const getGamePlayerCount = () => {
        fetch(`/getGamePlayerCount/${appid}`)
        .then(res => res.json())
        .then(data => setGamePlayerData(data))
    }

    return (  
        <div>
        </div>
    );
}
 
export default Store;