import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import GameInfo from "../components/Game/GameInfo";
import Carousel from "../components/Game/Carousel";
import Footer from "../components/Footer";
import GameBanner from "../components/Game/GameBanner";
import Loading from "../components/Loading";

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
            ?   <div className="max-w-[800px] min-w-[400px] mx-auto p-5 md:p-none">
                    <NavBar/>
                    <GameBanner game={steamGameData}/>
                    <GameInfo game={steamGameData} playerCount={playerCounts}/> 
                    <Carousel images={steamGameData.screenshots}/>
                    <Footer/>
                </div>
            :   <Loading/>
            }
        </>
    );
}
 
export default Store;