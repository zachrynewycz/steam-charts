import { useState, useEffect } from "react";

const SearchResults = ({userInput}) => {
    const [steamGameData, setSteamGameData] = useState({});

    useEffect(() => {        
        getList()
    }, [])

    const getList = () => {
        fetch("/getSteamGameList")
        .then(res => res.json())
        .then(data => { setSteamGameData(data) })
        .catch(e => console.log(e))
    }
    
    return (  
        <div>
            {/* {steamGameData.map().filter(value => value !== userInput)} */}
        </div>
    );
}
 
export default SearchResults;