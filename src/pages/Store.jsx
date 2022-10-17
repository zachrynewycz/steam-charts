import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/LoadingSpinner/Loading";
import GameContainer from "../components/Game/GameContainer";

const Store = () => {
    const [steamGameData, setSteamGameData] = useState();
    const [playerCounts, setPlayerCounts] = useState();
    const { appid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSteamGameData()
        getGamePlayerCount()
    }, [appid])

    const getSteamGameData = () => {
        fetch(`http://localhost:5000/getSteamGameData/${appid}`)
        .then(res => res.json())
        .then(data => setSteamGameData(data[appid].data))
        .catch(() => {
            alert("There has been an error fetching data.")
            navigate("/")
        })
    }

    const getGamePlayerCount = () => {
        fetch(`http://localhost:5000/getGamePlayerCount/${appid}`)
        .then(res => res.json())
        .then(data => setPlayerCounts(data))
        .catch(() => {
            alert("There has been an error fetching data.")
            navigate("/")
        })
    }

    return (  
        <>
            {(steamGameData && playerCounts) 
            ? <GameContainer steamGameData={steamGameData} playerCounts={playerCounts}/> 
            : <Loading/> 
            }
        </>
    );
}
 
export default Store;