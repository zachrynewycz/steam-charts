import NavBar from "../Nav/NavBar";
import GameBanner from "./GameBanner";
import GameInfo from "./GameInfo";
import Carousel from "./Carousel";
import Footer from "../Footer/Footer";

const GameContainer = ({ steamGameData, playerCounts }) => {
    return (  
        <div className="max-w-[800px] min-w-[400px] mx-auto p-5 md:p-none">
            <NavBar/>
            <GameBanner game={steamGameData}/>
            <GameInfo game={steamGameData} playerCount={playerCounts}/> 
            <Carousel images={steamGameData.screenshots}/>
            <Footer/>
        </div>
    );
}
 
export default GameContainer;