import CategoryTag from "./CategoryTag";

const GameBanner = ({ game }) => {
    return (  
        <div className="flex">
            <img className="rounded-tl-xl rounded-bl-xl w-2/3 object-cover" src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.steam_appid}/header.jpg`}/>

            <div className="bg-component-bg rounded-tr-xl rounded-br-xl w-[40%] p-5">
                <h1 className="font-pop_semi text-white text-2xl">{game.name}</h1>
                <div className="flex flex-wrap">
                    {game.genres
                        .map((genre, i) => <CategoryTag key={i} name={genre.description}/>)
                        .splice(0, Math.floor(game.genres.length) / 1.5)
                    }
                </div>
                <div className="bg-price-btn rounded-md py-1 px-3 font-pop_med text-white my-5 inline-block text-xl">{game.is_free ? "Free" : game.price_overview.final_formatted}</div>

                <div className="text-white font-pop_med">
                    <div className="flex justify-between">
                        <span className="text-gray-alt-txt">Release Date</span>
                        <span>{game.release_date.coming_soon ? "Coming Soon" : game.release_date.date}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-alt-txt">Developer</span>
                        <span>{game.developers[0]}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-alt-txt">Publisher</span>
                        <span>{game.publishers[0]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default GameBanner;