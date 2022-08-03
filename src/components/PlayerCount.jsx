const PlayerCount = ({count}) => {
    return (  
        <div>
            <h1>{count[0]}<br/><span>Playing Now</span></h1>
            <h1>{count[1]}<br/><span>24 Hour Peak</span></h1>
            <h1>{count[2]}<br/><span>All Time Peak</span></h1>
        </div>
    );
}
 
export default PlayerCount;