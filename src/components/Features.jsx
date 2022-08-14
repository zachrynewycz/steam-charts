const Features = ({ game }) => {
    return (  
    <div className="flex flex-col justify-between basis-1/2">
        <div>
            <span className="font-pop_semi text-gray-alt-txt mr-2">Features: </span>
            {game?.categories
                .map((category, i) => <span className="text-white text-xs font-pop_reg" key={i}>{category.description}, &nbsp;</span>)
                .splice(0, Math.floor(game.categories.length) / 3)}
        </div>
        <div>
            <span className="font-pop_semi text-gray-alt-txt mr-4">App ID: </span>
            <span className="font-pop_reg text-white">{game.steam_appid}</span>
        </div>
        {game.website && 
            <div>
                <span className="font-pop_semi text-gray-alt-txt mr-4">Website: </span>
                <span className="font-pop_reg text-xs text-white">{game.website}</span>
            </div> 
        }
    </div>
    );
}
 
export default Features;