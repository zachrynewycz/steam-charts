const GameInfo = ({ game, playerCount }) => {
    return (  
        <div>
            <div>
                <h1>{playerCount[0]}<br/><span>Playing Now</span></h1>
                <h1>{playerCount[1]}<br/><span>24 Hour Peak</span></h1>
                <h1>{playerCount[2]}<br/><span>All Time Peak</span></h1>
            </div>

            <div>
                <div>
                    <h1>About</h1>
                    <p>{game.short_description}</p>
                </div>
                
                <div>
                    <div>Features: {game.categories.map((category, i) => <span key={i}>{category.description}</span>)}</div>
                    <div>App ID: <span>{game.steam_appid}</span></div>
                    {game.website && <div>Website: <span>{game.website}</span></div> }
                </div>
            </div>
        </div>
    );
}
 
export default GameInfo;