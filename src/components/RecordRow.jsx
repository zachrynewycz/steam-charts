import { useNavigate } from "react-router-dom";

const RecordRow = ({ data }) => {
    const navigate = useNavigate();

    return (  
        <div onClick={() => {navigate(`/game/${data.id}`)}}>
            <div className="flex items-center cursor-pointer hover:bg-category-bg rounded-lg">
                <div className="flex items-center w-3/4">
                    <img className="w-36 rounded-md" src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.id}/header.jpg`}/>
                    <p className="px-5 text-white font-pop_semi text-lg">{data.data[0]}</p>
                </div>
                
                <div className="flex justify-around w-1/2 text-white font-pop_semi text-xl text-center">
                    <p className="w-1/2">{data.data[1]}</p>
                    <p className="text-gray-alt-txt font-pop_med w-1/2">{data.data[2]}</p>
                </div>
            </div>
            <hr className="mt-3 mb-5 border-none h-1 bg-[#1b2634]"/>
        </div>
    );
}
 
export default RecordRow;