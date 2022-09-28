import Features from "./Features";

const GameInfo = ({ game, playerCount }) => {
    return (  
        <>
            <div className="flex justify-around bg-component-bg rounded-xl my-10 text-white font-pop_semi text-2xl md:text-[40px] pb-2 md:pb-4 ">
                <h1 className="text-green-txt"><span className="text-sm md:text-lg">Playing Now</span><br/>{playerCount[0] || 0}</h1>
                <h1><span className="text-sm md:text-lg">24 Hour Peak</span><br/>{playerCount[1] || 0}</h1>
                <h1><span className="text-sm md:text-lg">All Time Peak</span><br/>{playerCount[2] || 0}</h1>
            </div>

            <div className="flex flex-col md:flex-row mb-14 bg-component-bg px-6 py-4 rounded-xl">
                <div className="basis-[60%]">
                    <h1 className="font-pop_semi text-xl text-gray-alt-txt mb-1">About</h1>
                    <p className="font-pop_reg text-[#f3f3f3] text-sm leading-6">{game.short_description}</p>
                </div>
                
                <div className="hidden md:block w-1 mx-5 bg-category-bg"/>
                <Features game={game}/>
            </div>
        </>
    );
}
 
export default GameInfo;