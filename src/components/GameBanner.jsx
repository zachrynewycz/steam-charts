import CategoryTag from "./CategoryTag";

const GameBanner = ({ game }) => {
    return (  
        <div>
            <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.steam_appid}/header.jpg`}/>

            <div>
                <h1>{game.name}</h1>
                <div className="flex">{ game.genres.map((genre, i) => <CategoryTag key={i} name={genre.description}/> )}</div>
                <div>{game.is_free ? "Free" : game.price_overview.final_formatted}</div>

                <div>
                    <p>Release Date <span>{game.release_date.coming_soon ? "Coming Soon" : game.release_date.date}</span></p>
                    <p>Developer <span>{game.developers[0]}</span></p>
                    <p>Publisher <span>{game.publishers[0]}</span></p>
                </div>
            </div>
        </div>
    );
}
 
export default GameBanner;