import { useNavigate } from "react-router-dom";

const TopGame = ({ data }) => {
    const navigate = useNavigate();

    return (  
        <div className="mb-5" onClick={() => {navigate(`/game/${data.id}`)}}>
            <div className="flex cursor-pointer hover:bg-category-bg rounded-lg">
                <div className="flex items-center w-1/2 md:w-3/4">
                    <img className="w-36 rounded-md hidden md:block" src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.id}/header.jpg`}/>
                    <p className="md:px-5 text-white font-pop_semi text-sm md:text-lg">{data.name}</p>
                </div>
                
                <div className="w-1/2 flex items-center justify-around font-pop_semi text-md md:text-xl text-white text-center">
                    <p className="text-green-txt w-1/2">{data.current}</p>
                    <p className="w-1/2">{data.peak}</p>
                </div>
            </div>
            <hr className="mt-3 mb-5 border-none h-1 bg-[#1b2634]"/>
        </div>
    );
}
 
export default TopGame;