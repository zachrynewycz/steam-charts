import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/shared/Loading";
import GameBanner from "../components/Game/GameBanner";
import Carousel from "../components/Game/Carousel";
import Footer from "../components/shared/Footer";
import GameInfo from "../components/Game/GameInfo";
import NavBar from "../components/nav/NavBar";

const Game = () => {
    const [steamGameData, setSteamGameData] = useState();
    const [playerCounts, setPlayerCounts] = useState();
    const { appid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSteamGameData();
        getGamePlayerCount();
    }, [appid]);

    const getSteamGameData = async () => {
        const res = await fetch(`http://localhost:5000/getSteamGameData/${appid}`);
        const data = await res.json();
        setSteamGameData(data[appid].data);
    };

    const getGamePlayerCount = async () => {
        try {
            const res = await fetch(`http://localhost:5000/getGamePlayerCount/${appid}`);
            const data = await res.json();
            setPlayerCounts(data);
        } catch (error) {
            alert("There has been an error fetching data.");
            navigate("/");
        }
    };

    if (!steamGameData) return <Loading />;

    return (
        <div className="max-w-[800px] min-w-[400px] mx-auto p-5 md:p-none">
            <NavBar />
            <GameBanner game={steamGameData} />
            <GameInfo game={steamGameData} playerCount={playerCounts} />
            <Carousel images={steamGameData.screenshots} />
            <Footer />
        </div>
    );
};

export default Game;
