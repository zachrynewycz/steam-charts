import CategoryTag from "./CategoryTag";

const StoreHeader = ({ data }) => {
    return (  
        <div>
            <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.steam_appid}/header.jpg`}/>

            <div>
                <h1>{data.name}</h1>
                <div className="flex">{ data.genres.map((genre, i) => <CategoryTag key={i} name={genre.description}/> )}</div>
                <div>{data.is_free ? "Free" : data.price_overview.final_formatted}</div>

                <div>
                    <p>Release Date <span>{data.release_date.coming_soon ? "Coming Soon" : data.release_date.date}</span></p>
                    <p>Developer <span>{data.developers[0]}</span></p>
                    <p>Publisher <span>{data.publishers[0]}</span></p>
                </div>
            </div>
        </div>
    );
}
 
export default StoreHeader;