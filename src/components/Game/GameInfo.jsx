import Features from "./Features";

const GameInfo = ({ game, playerCount }) => {
    return (
        <>
            <div className="flex justify-around items-center bg-component-bg rounded-xl my-10 text-white font-pop_semi text-2xl md:text-[40px] py-4 ">
                <div className="text-green-txt">
                    <p className="text-sm md:text-lg mb-1">Playing Now</p>
                    <h1>{playerCount[0] || 0}</h1>
                </div>

                <div>
                    <p className="text-sm md:text-lg mb-1">24 Hour Peak</p>
                    <h1>{playerCount[1] || 0}</h1>
                </div>

                <div>
                    <p className="text-sm md:text-lg mb-1">All Time Peak</p>
                    <h1>{playerCount[2] || 0}</h1>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-14 bg-component-bg px-6 py-4 rounded-xl">
                <div className="basis-[60%]">
                    <h1 className="font-pop_semi text-xl text-gray-alt-txt mb-1">About</h1>
                    <p className="font-pop_reg text-[#f3f3f3] text-sm leading-6">{game.short_description}</p>
                </div>

                <div className="hidden md:block w-1 mx-5 bg-category-bg" />
                <Features game={game} />
            </div>
        </>
    );
};

export default GameInfo;
