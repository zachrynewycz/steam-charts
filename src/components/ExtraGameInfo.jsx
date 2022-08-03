const ExtraGameInfo = ({gameData}) => {
    return (  
        <div>
            <div>
                <h1>About</h1>
                <p>{gameData.short_description}</p>
            </div>
            <div/>
            <div>
                <div>Features: {gameData.categories.map((category, i) => <span key={i}>{category.description}</span>)}</div>
                {gameData.website && <div>Website: <span>{gameData.website}</span></div>}
                <div>App ID: <span>{gameData.steam_appid}</span></div>
            </div>
        </div>
    );
}
 
export default ExtraGameInfo;