import { useNavigate } from "react-router-dom";

const RecordRow = ({ data }) => {
    const navigate = useNavigate();

    return (  
        <div onClick={() => {navigate(`/game/${data.id}`)}}>
            <div>
                <div>
                    <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.id}/header.jpg`}/>
                    <p>{data.data[0]}</p>
                </div>
                
                <div>{data.data[1]} &nbsp; {data.data[2]}</div>
            </div>
            <hr/>
        </div>
    );
}
 
export default RecordRow;