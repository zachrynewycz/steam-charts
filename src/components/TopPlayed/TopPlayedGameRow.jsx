import { useNavigate } from "react-router-dom";

const TopGame = ({ data, rank }) => {
    const navigate = useNavigate();

    return (  
        <div className="mt-2 bg-component-bg p-2 rounded-md flex items-center hover:scale-105 cursor-pointer" onClick={() => {navigate(`/game/${data.id}`)}}>
            <h2 className="text-white font-pop_semi mx-4 text-xl w-10">{rank+1}</h2>

            <div className="flex items-center w-1/2 md:w-3/4">
                <img className="w-32 rounded-md hidden md:block" src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.id}/header.jpg`}/>
                <p className="md:px-5 text-white font-pop_semi text-sm">{data.name}</p>
            </div>
            
            <div className="w-1/2 flex items-center justify-around font-pop_semi md:text-lg text-white text-right mr-5">
                <p className="text-green-txt w-1/2">{data.current}</p>
                <p className="w-1/2">{data.peak}</p>
            </div>
        </div>
    );
}
 
export default TopGame;