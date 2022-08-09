import ExtraGameInfo from "./ExtraGameInfo";
import PlayerCount from "./PlayerCount";

const GameInfo = ( {data, players} ) => {
    return (  
        <>
            <PlayerCount count={players}/>
            <ExtraGameInfo gameData={data}/>
        </>
    );
}
 
export default GameInfo;