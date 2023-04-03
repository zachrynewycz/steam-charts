import { useNavigate } from "react-router-dom";

const RecordList = ({ data, rank }) => {
    const navigate = useNavigate();

    return (
        <div
            className="mt-2 bg-component-bg p-2 rounded-md flex items-center hover:bg-[#1d2938] cursor-pointer"
            onClick={() => {
                navigate(`/game/${data.id}`);
            }}
        >
            <h2 className="text-white font-pop_semi mx-4 text-xl w-10">{rank + 1}</h2>

            <div className="flex items-center w-3/4">
                <img
                    className="w-32 rounded-md hidden md:block"
                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.id}/header.jpg`}
                />
                <p className="md:px-5 text-white font-pop_semi text-sm">{data.data[0]}</p>
            </div>

            <div className="flex justify-around w-1/2 text-white font-pop_semi text-sm md:text-lg text-right mr-4">
                <p className="w-1/2">{data.data[1]}</p>
                <p className="font-pop_med w-1/2">{data.data[2]}</p>
            </div>
        </div>
    );
};

export default RecordList;
