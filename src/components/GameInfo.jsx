import Carousel from "./Carousel";
import ExtraGameInfo from "./ExtraGameInfo";
import PlayerCount from "./PlayerCount";

const GameInfo = ( {data, players} ) => {
    return (  
        <>
            <PlayerCount count={players}/>
            <Carousel images={data.screenshots}/>
            <ExtraGameInfo gameData={data}/>
        </>
    );
}
 
export default GameInfo;