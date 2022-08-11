import { useNavigate } from "react-router-dom";

const TopGame = ({ data }) => {
    const navigate = useNavigate();

    return (  
        <div onClick={() => {navigate(`/game/${data.id}`)}}>
            <div>
                <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.id}/header.jpg`}/>
                <p>{data.name}</p>
            </div>
            
            <div>{data.current} &nbsp; {data.peak}</div>
            <hr/>
        </div>
    );
}
 
export default TopGame;