import Carousel from "./Carousel";
import ExtraGameInfo from "./ExtraGameInfo";
import PlayerCount from "./PlayerCount";

const StoreBody = ( {data, players} ) => {
    return (  
        <div>
            <PlayerCount count={players}/>
            <Carousel images={data.screenshots}/>
            <ExtraGameInfo gameData={data}/>
        </div>
    );
}
 
export default StoreBody;