import { useNavigate } from "react-router-dom";

const TopGameRow = ({ game }) => {
    const navigate = useNavigate();

    return (  
    <div key={game.id} onClick={() => {navigate(`/game/${game.id}`)}}>
        <div>
            <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.id}/header.jpg`}/>
            <p>{game.name}</p>
        </div>
        
        <div>{game.current} &nbsp; {game.peak}</div>
        <hr/>
    </div>
    );
}
 
export default TopGameRow;